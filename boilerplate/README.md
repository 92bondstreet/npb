# <%= slugname %>

<!--
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]
-->

> <%= props.description %>

## Keynote

<%= props.keynote %>

## Install

```sh
$ npm install --save <%= slugname %>
```


## Usage

```js
var <%= slugname %> = require('<%= slugname %>');

<%= slugname %>('92 Bond Street Node Package Boilerplate');
```

```sh
$ npm install --global <%= slugname %>
$ <%= slugname %> --help
```

## License

<%= props.license %> © [<%= props.authorName %>](<%= props.authorUrl %>)


[npm-url]: https://npmjs.org/package/<%= slugname %>
[npm-image]: https://badge.fury.io/js/<%= slugname %>.svg
[travis-url]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>
[travis-image]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>.svg?branch=master
[daviddm-url]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>
