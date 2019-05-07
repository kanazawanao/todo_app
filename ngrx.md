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

### Reducers

### Selectors