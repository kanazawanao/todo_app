# Version 8 of Angular — Smaller bundles, CLI APIs, and alignment with the ecosystem
- Angularのバージョン8  - 小型バンドル、CLI API、およびエコシステムとの連携

- The 8.0.0 release of Angular is here! This is a major release spanning the entire platform, including the framework, Angular Material, and the CLI with synchronized major versions. This release improves application startup time on modern browsers, provides new APIs for tapping into the CLI, and aligns Angular to the ecosystem and more web standards.
  - Angularの8.0.0リリースについて。これは、フレームワーク、Angular Material、および同期メジャーバージョンを含むCLIを含む、プラットフォーム全体にわたるメジャーリリースです。このリリースでは、最新のブラウザでのアプリケーション起動時間が短縮され、CLIを利用するための新しいAPIが提供され、Angularがエコシステムやその他のWeb標準に準拠するようになりました。

## How to update to version 8
- Visit [update.angular.io](https://update.angular.io/) for detailed information and guidance. For most developers, one command should take care of this update:
  - 詳細な情報と手引きについては [update.angular.io](https://update.angular.io/) にアクセスしてください。ほとんどの開発者にとって、1つのコマンドでこのアップデートを管理する必要があります。
```
ng update @angular/cli @angular/core
```

## Differential Loading by Default
- デフォルトでの差分ロード

- [Differential loading](https://web.dev/codelab-serve-modern-code) is a process by which the browser chooses between modern or legacy JavaScript based on its own capabilities. We now take advantage of this by default by performing a modern build (es2015) and a legacy build (es5) of your application. When users load your application, they’ll automatically get the bundle they need.
  - [Differential loading](https://web.dev/codelab-serve-modern-code) とは、ブラウザが独自の機能に基づいて最新のJavaScriptと従来のJavaScriptのどちらを使用するかを選択するプロセスです。現在、デフォルトでこれを利用して、最新のビルド（es2015）とレガシービルド（es5）を実行しています。ユーザーがアプリケーションをロードすると、必要なバンドルが自動的に取得されます。

- If you use ng update, we update your tsconfig.jsonfor you to take advantage of this. Our CLI looks at the target JS level in your tsconfig.json to determine whether or not to take advantage of Differential Loading.
  - ng updateを使用する場合は、これを利用するようにtsconfig.jsonを更新します。私たちのCLIは、tsconfig.jsonのターゲットJSレベルを調べて、差分ロードを利用するかどうかを判断します。

- When target is set to es2015, we generate and label two bundles.
  - targetがes2015に設定されている場合は、2つのバンドルを生成してラベルを付けます

- At runtime, the browser uses attributes on the script tag to load the right bundle.
  - 実行時に、ブラウザはscriptタグの属性を使用して正しいバンドルをロードします。

```js
<script type="module" src="…"> // Modern JS

<script nomodule src="…"> // Legacy JS
```

- On [angular.io](https://angular.io/) we saved over 40kB of initial bundle size for modern browsers. From the community we’ve heard that applications generally save 7–20% of their bundle size, depending on the amount of modern JavaScript features they take advantage of.
  - [angular.io](https://angular.io/)では、最新のブラウザ用に初期バンドルサイズを40kB以上節約しました。コミュニティーからは、アプリケーションが利用する最新のJavaScript機能の量にもよりますが、一般的にアプリケーションはバンドルサイズの7〜20％節約すると聞きました。

- Learn more about [differential loading](https://angular.io/guide/deployment#differential-loading).
  - 詳細は [differential loading](https://angular.io/guide/deployment#differential-loading)を参照.

## Route Configurations use Dynamic Imports
- ダイナミックインポートを使用したルート設定

- We highly recommend you lazily load parts of your application using the router. This is accomplished by using the loadChildren key in your route configuration.
  - ルーターを使用してアプリケーションの一部を遅延ロードすることを強くお勧めします。 これはあなたのルート設定でloadChildrenキーを使用することによって達成されます。

- Previously this looked like:
  - 以前は次のようになっていました：

```js
{path: '/admin', loadChildren: './admin/admin.module#AdminModule'}
```

- This syntax was custom to Angular and built into our toolchain. With version 8 we’re migrating to the industry standard [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
  - この構文はAngularの習慣であり、ツールチェーンに組み込まれています。 バージョン8では、業界標準の[dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)に移行しています。

- Now this will look like:
  - 今後は次のようになります。

```js
{path: `/admin`, loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)}
```

- This will improve the support from editors like [VSCode](https://code.visualstudio.com/) and [WebStorm](https://www.jetbrains.com/webstorm/) who will now be able to understand and validate these imports for you.
  - これにより、[VSCode](https://code.visualstudio.com/)や[WebStorm](https://www.jetbrains.com/webstorm/)のように、これらのインポートを理解して検証できるようになる編集者からのサポートが向上します。

- If you use ng update, we’ll update your code automatically to use the new best practice.
  - アップデートを使用する場合は、新しいベストプラクティスを使用するようにコードが自動的に更新されます。

## Builder APIs in the CLI
- CLIのビルダーAPI

- In the same way that Schematics allow you to tap into ng new ng generate ng add and ng update, we’ve released new Builder APIs that allow you to tap into ng build ng test and ng run to perform processes like build and deployment.
  - Schematicsで新規追加、新規追加、新規更新を利用できるのと同じように、新規Builder APIをリリースして、新規ビルドテストと新規実行を利用して、ビルドやデプロイなどのプロセスを実行できます。

- Check out [our blog post on these new APIs](https://blog.angular.io/introducing-cli-builders-d012d4489f1b).
  - [これらの新しいAPIに関するブログ記事](https://blog.angular.io/introducing-cli-builders-d012d4489f1b)を調べてください。

- Or read [the API documentation](https://angular.io/guide/cli-builder).
  - あるいは[APIドキュメント](https://angular.io/guide/cli-builder)を読んでください。

- We’ve also been working with cloud providers to begin taking advantage of these APIs. Today you can try the latest version of [AngularFire](https://github.com/angular/angularfire2), which adds a deploy command, making build & deploy to Firebase easier than ever:
  - 私たちはまた、これらのAPIを利用し始めるためにクラウドプロバイダーと協力しています。 今日では、[AngularFire](https://github.com/angular/angularfire2)の最新バージョンを試すことができます。これにより、deployコマンドが追加され、Firebaseへのビルドとデプロイがこれまでになく簡単になります。

```
ng add @angular/fire
ng run my-app:deploy
```

- Once installed, this deployment command will both build and deploy your application in the way recommended by AngularFire.
  - インストールが完了すると、この配置コマンドはAngularFireが推奨する方法でアプリケーションを構築および配置します。

## Workspace APIs in the CLI
- CLIのワークスペースAPI

- Previously developers using [Schematics](https://angular.io/guide/schematics) had to manually open and modify their angular.json to make changes to the workspace configuration. With 8.0, we’re introducing a new API to make it easier to read and modify this file.
  - これまで[Schematics](https://angular.io/guide/schematics)を使用していた開発者は、ワークスペース設定を変更するために手動でangle.jsonを開いて修正する必要がありました。 8.0では、このファイルを読みやすく変更しやすいように新しいAPIを導入しています。

- Read more about the available [Workspace APIs](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/core#workspaces).
  - 利用可能な[Workspace APIs](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/core#workspaces)についての詳細を読んでください。

## Web Worker Support
- Web Workerサポート

- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) are a great way to speed up your application if you do any sort of cpu-intensive processing. Web workers allow you to offload work to a background thread, such as image or video manipulation. We use web workers on [angular.io](https://angular.io/) for in-app search indexing.
  - [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)は、CPU集中型の処理を行う場合にアプリケーションを高速化するための優れた方法です。 Webワーカーを使用すると、画像やビデオの操作などの作業をバックグラウンドスレッドに任せることができます。 アプリ内検索のインデックス作成には[angular.io](https://angular.io/)のWebワーカーを使用します。

- You can now generate new web workers from the CLI. To add a worker to your project, you can run:
  - これでCLIから新しいWebワーカーを生成できます。 プロジェクトにワーカーを追加するには、次のように実行します。

```
ng generate webWorker my-worker
```

- Once you have a web worker, you can use it normally in your application, and the CLI will be able to bundle and code split it correctly:
  - Webワーカーを手に入れたら、それをアプリケーションで通常どおりに使用でき、CLIはそれを正しくバンドルしてコード分割することができます。

```js
const worker = new Worker(`./my-worker.worker`, { type: `module` });
```

- Read more about [web workers in the Angular CLI](https://angular.io/guide/web-worker).
  - [Angular CLIのWebワーカー](https://angular.io/guide/web-worker)についての詳細を読んでください

## AngularJS Migration Improvements
- AngularJSの移行の改善

- If you use the [$location service](https://docs.angularjs.org/api/ng/service/$location) in an AngularJS application, Angular now provides a LocationUpgradeModule that enables a unified location service that shifts responsibilities from the AngularJS $location service to the Angular Location Service. This should improve the lives of applications using ngUpgrade who need routing in both the AngularJS and Angular part of their application.
  - AngularJSアプリケーションで[$locationサービス](https://docs.angularjs.org/api/ng/service/$location)を使用する場合、AngularはLocationUpgradeModuleを提供するようになりました。これにより、責任をAngularJS $ロケーションサービスからAngularロケーションサービスに移す統一されたロケーションサービスを可能にします。 これにより、ngUpgradeを使用してアプリケーションのAngular JSとAngular部分の両方でルーティングを必要とするアプリケーションの寿命を延ばすことができます。

- Read more about the [Unified Angular Location Service](https://angular.io/guide/upgrade#using-the-unified-angular-location-service).
  - [Unified Angular Location Service](https://angular.io/guide/upgrade#using-the-unified-angular-location-service)について詳しくお読みください。

- We’ve also documented best practices around lazy loading parts of your AngularJS application from Angular, making it easier to migrate the most commonly used features first, and only loading AngularJS for a subset of your application.
  - AngularJSアプリケーションの一部をAngularから遅延ロードすることに関するベストプラクティスも文書化されています。これにより、最も一般的に使用される機能を最初に移行しやすくなり、アプリケーションのサブセットに対してのみAngularJSをロードできます。

- Read more about [Lazy Loading AngularJS](https://angular.io/guide/upgrade#create-a-service-to-lazy-load-angularjs).
  - [Lazy Loading AngularJS](https://angular.io/guide/upgrade#create-a-service-to-lazy-load-angularjs)について詳しくお読みください。

## New Deprecation Guide
- 新しい非推奨ガイド

- We are committed to maintaining Semantic Versioning and a high degree of stability even across major versions. For our public API, we are committed to supporting features for N+2 releases. This means that a feature that is deprecated in 8.1 will keep working in the following two major releases (9 and 10). For example, we are deprecating platform-webworker in version 8.
  - 私たちは、セマンティックバージョニングと主要なバージョン間でも高度な安定性を維持することを約束します。 私たちの公開APIのために、私たちはN + 2リリースの機能をサポートすることを約束します。 つまり、8.1で廃止予定の機能は、次の2つのメジャーリリース（9と10）でも引き続き機能します。 たとえば、バージョン8ではplatform-webworkerを非推奨にしています。

- We are making it easier to find deprecations and removals in Angular. For a comprehensive list of all deprecations, see the new [Deprecation Guide](https://angular.io/guide/deprecations).
  - Angularで廃止や廃止が見やすくなりました。 すべての非推奨の包括的なリストについては、新しい[非推奨ガイド]((https://angular.io/guide/deprecations))を参照してください。

## Ivy & Bazel
- We know there’s lots of excitement for our forthcoming opt-in previews. We’ll be providing individual updates on these next week on this blog, so stay tuned!

## Contributors and Collaborators
- A special thanks to Manfred Steyer for contributing to Differential Loading, Craig Spence to Dynamic Import support, Jason Miller to Web Worker bundling support. This release was brought to you by 286 contributors:
