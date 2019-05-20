# ngrxまとめ
https://ngrx.io/

## Store
- Store is RxJS powered state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.
- storeは、Reduxを参考にした、Angularアプリケーション用のRxJSを動力源とした状態管理システムです。  StoreはAngularの上に高性能で一貫性のあるアプリケーションを書くのを助けるように設計された制御状態コンテナです。

## Key concepts
- Actions describe unique events that are dispatched from components and services.
	- actionは、コンポーネントやサービスから送出された固有のイベントを表します。
- State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
	- 状態の変更は、現在の状態と新しい状態を計算するための最新のアクションを実行するリデューサーと呼ばれる純粋な関数によって処理されます。
- Selectors are pure functions used to select, derive and compose pieces of state.
	- selectorは、状態の一部を選択、導出、および構成するために使用される純粋な関数です。
- State accessed with the Store, an observable of state and an observer of actions.
	- stateはstoreでアクセスし、storeはstateを監視可能にし、actionを監視します。

## Installation
```git
npm install @ngrx/store --save
```

## Architecture
### Actions
- Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.
	- actionはNgRxの主要な構成要素の一つです。actionはアプリ全体から実行されるユニークなイベントを表します。ページとユーザーとの相互作用、ネットワーク要求を介した外部の相互作用、およびデバイスAPIとの直接の相互作用から、これらのイベントおよびその他のイベントがactionとともに記述されます

#### Introduction
- Actions are used in many areas of NgRx. Actions are the inputs and outputs of many systems in NgRx. Actions help you to understand how events are handled in your application. This guide provides general rules and examples for writing actions in your application.
	- actionはNgRxの大部分で利用されます。actionはNgRxのシステムの入力と出力を担います。actionは、アプリケーションでイベントがどのように処理されるのかを理解するのに役立ちます。

#### The Action interface
- An Action in NgRx is made up of a simple interface:
	- NgRxのActionはシンプルなインターフェースで構成されています
```ts
interface Action {
  type: string;
}
```

- The interface has a single property, the type, represented as a string. The type property is for describing the action that will be dispatched in your application. The value of the type comes in the form of [Source] Event and is used to provide a context of what category of action it is, and where an action was dispatched from. You add properties to an action to provide additional context or metadata for an action. The most common property is the payload, which adds any associated data needed for the action.
	- インタフェースは、文字列として表される単一のプロパティ、型を持ちます。 typeプロパティは、アプリケーションでディスパッチされるアクションを説明するためのものです。型の値は[Source] Eventの形を取り、それがどのカテゴリのアクションであるか、およびどこからアクションがディスパッチされたかのコンテキストを提供するために使用されます。アクションにプロパティを追加して、アクションに追加のコンテキストまたはメタデータを提供します。最も一般的なプロパティはペイロードです。ペイロードは、アクションに必要な関連データをすべて追加します。

- Listed below are examples of actions written as plain javascript objects (POJOS):
	- 以下に示すのは、プレーンなJavaScriptオブジェクトとして記述されたアクションの例です。
```js
{
  type: '[Auth API] Login Success'
}
```
- This action describes an event triggered by a successful authentication after interacting with a backend API.
	- このアクションは、バックエンドAPIと対話した後に認証が成功したことによってトリガーされたイベントを表します
```js
{
  type: '[Login Page] Login',
  payload: {
    username: string;
    password: string;
  }
}
```
- This action describes an event triggered by a user clicking a login button from the login page to attempt to authenticate a user. The payload contains the username and password provided from the login page.
	- このアクションは、ユーザーがログインページからログインボタンをクリックしてユーザーの認証を試みることによってトリガーされるイベントを表します。ペイロードには、ログインページから提供されたユーザー名とパスワードが含まれています。

#### Writing actions
- There are a few rules to writing good actions within your application.
	- アプリで良いアクションを書くためのいくつかのルール
	1. Upfront - write actions before developing features to understand and gain a shared knowledge of the feature being implemented.
		- 最先端 - 実装する機能について理解し共有する知識を得るために、機能を開発する前にアクションを書きます。
	2. Divide - categorize actions based on the event source.
		- 分割 - イベントソースに基づいてアクションを分類します。
	3. Many - actions are inexpensive to write, so the more actions you write, the better you express flows in your application.
		- 多くの - アクションは書くのが安価であるので、あなたが書くアクションが多ければ多いほど、あなたはより良いあなたのアプリケーションでフローを表現します。
	4. Event-Driven - capture events not commands as you are separating the description of an event and the handling of that event.
		- イベントドリブン - イベントの説明とそのイベントの処理を分離しているため、コマンドではなくイベントをキャプチャします。
	5. Descriptive - provide context that are targeted to a unique event with more detailed information you can use to aid in debugging with the developer tools.
		- 記述 - 開発者ツールを使用したデバッグを支援するために使用できる、より詳細な情報とともに、固有のイベントを対象としたコンテキストを提供します。

- Following these guidelines helps you follow how these actions flow throughout your application.
	- これらのガイドラインに従うと、これらのアクションがアプリケーション全体にどのように流れるかを追跡するのに役立ちます。

- Let's look at an example action of initiating a login request.
	- ログインリクエストを開始するアクションの例を見てみましょう。

```ts
import { Action } from '@ngrx/store';

export class Login implements Action {
  readonly type = '[Login Page] Login';

  constructor(public payload: { username: string; password: string }) {}
}
```

- Actions are written as classes to provide a type-safe way to construct an action when it's being dispatched. The Login action implements the Action interface to adhere to its structure. The payload in this example is an object of a username and password, that is additional metadata needed for the handling of the action.
	- アクションは、ディスパッチされているときにアクションを構築するためのタイプセーフな方法を提供するためにクラスとして書かれています。 Loginアクションは、その構造に準拠するようにActionインターフェイスを実装します。この例のペイロードは、ユーザー名とパスワードのオブジェクト、つまりアクションの処理に必要な追加のメタデータです。

- Instantiate a new instance of the action to use when dispatching.
	- ディスパッチ時に使用するアクションの新しいインスタンスを生成します。
```ts
click(username: string, password: string) {
  store.dispatch(new Login({ username: username, password: password }));
}
```

- The Login action has very specific context about where the action came from and what event happened.
	- Loginアクションは、アクションがどこから来たのか、そしてどんなイベントが起こったのかについて特定のコンテキストを持っています。
	1. The category of the action is captured within the square brackets [].
		- アクションのカテゴリは、角かっこ[]で囲われています。
	2. The category is used to group actions for a particular area, whether it be a component page, backend API, or browser API.
		- カテゴリは、コンポーネントページ、バックエンドAPI、ブラウザAPIのいずれであっても、特定の領域に対するアクションをグループ化するために使用されます。
	3. The Login text after the category is a description about what event occurred from this action. In this case, the user clicked a login button from the login page to attempt to authenticate with a username and password.
		- カテゴリの後のログインテキストは、このアクションから発生したイベントについての説明です。この場合、ユーザーはログインページからログインボタンをクリックして、ユーザー名とパスワードで認証を試みます。

#### Creating action unions
- The consumers of actions, whether it be reducers or effects use the type information from an action to determine whether they need to handle the action. Actions are grouped together by feature area, but also need to expose the action type information. Looking at the previous example of the Login action, you'll define some additional type information for the actions.
	- アクションの消費者は、それがreducersであろうとeffectsであろうと、アクションからの型情報を使用して、アクションを処理する必要があるかどうかを判断します。アクションは機能領域ごとにグループ化されていますが、アクションタイプ情報を公開する必要もあります。前のLoginアクションの例を見て、アクションのためにいくつかの追加の型情報を定義します。
```ts
import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Login = '[Login Page] Login',
}
 
export class Login implements Action {
  readonly type = ActionTypes.Login;
 
  constructor(public payload: { username: string; password: string }) {}
}
 
export type Union = Login;
```

- Instead of putting the action type string directly in the class, the [Login Page] Login string is now provided in the ActionTypes enum. Also, an additional Union type is exported with the Login class. These additional exports allow you to take advantage of discriminated unions in TypeScript. Why this is important is covered in the reducers and effects guides.
	- アクションタイプ文字列を直接クラスに入れる代わりに、[Login Page]ログイン文字列がActionTypes列挙型に提供されるようになりました。また、Loginクラスと共に追加のUnion型がエクスポートされます。これらの追加のエクスポートにより、TypeScriptで差別化された共用体を利用することができます。これがなぜ重要なのかは、reducersとeffectsガイドで説明されています。

### Reducers
#### Reducers
- Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the type.
	- NgRxのReducersは、アプリケーション内のある状態から次の状態への遷移を処理します。Reducers関数は、タイプに基づいてどのアクションを処理するかを決定することによってこれらの遷移を処理します。

#### Introduction
- Reducer functions are pure functions in that they produce the same output for a given input. They are without side effects and handle each state transition synchronously. Each reducer function takes the latest Action dispatched, the current state, and determines whether to return a newly modified state or the original state. This guide shows you how to write reducer functions, register them in your Store, and compose feature states.
	- Reducers関数は、
	
#### The reducer function
- There are a few consistent parts of every piece of state managed by a reducer.
	1. An interface or type that defines the shape of the state.
	2. The arguments including the initial state or current state and the current action.
	3. The switch statement

- Below is an example of a set of actions to handle the state of a scoreboard, and the associated reducer function.

- First, define some actions for interacting with a piece of state.
```ts
import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  IncrementHome = '[Scoreboard Page] Home Score',
  IncrementAway = '[Scoreboard Page] Away Score',
  Reset = '[Scoreboard Page] Score Reset',
}
 
export class IncrementHome implements Action {
  readonly type = ActionTypes.IncrementHome;
}
 
export class IncrementAway implements Action {
  readonly type = ActionTypes.IncrementAway;
}
 
export class Reset implements Action {
  readonly type = ActionTypes.Reset;
 
  constructor(public payload: { home: number; away: number }) {}
}
 
export type ActionsUnion = IncrementHome | IncrementAway | Reset;
```

- Next, create a reducer file that imports the actions and define a shape for the piece of state.

#### Defining the state shape
- Each reducer function is a listener of actions. The scoreboard actions defined above describe the possible transitions handled by the reducer. Import multiple sets of actions to handle additional state transitions within a reducer.
```ts
import * as Scoreboard from '../actions/scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}
```

- You define the shape of the state according to what you are capturing, whether it be a single type such as a number, or a more complex object with multiple properties.

#### Setting the initial state
- The initial state gives the state an initial value, or provides a value if the current state is undefined. You set the initial state with defaults for your required state properties.
- Create and export a variable to capture the initial state with one or more default values.
```ts
export const initialState: State = {
  home: 0,
  away: 0,
};
```

### Selectors