# NPB

> (92 Bond Street) Node Package Boilerplate

Boilerplate that I use for my Node Package.

## Getting started

In your directory, run:

```
$ curl -fsSL https://github.com/92bondstreet/npb/archive/master.tar.gz | tar -xz --strip-components 2
```

You can also `git clone` or [download](https://github.com/92bondstreet/npb/archive/master.zip) this repo and get contents of the `boilerplate` folder.

## Pattern to replace

### README.md

Update following section:

* Title with the `package-name`
* Description
* Keynote
* Usage
* License
* badge(s) url


### package.json

Update the pattern `<%= %>` with the right value.

### /lib/index.js

Rename the file `/lib/index.js` to `/lib/package-name.js`

### index.js

Replace the export

```
module.exports = require('./lib/<%= slugname %>');
```

with

```
module.exports = require('./lib/package-name');
```

### cli.js

Update the pattern `<%= %>` with the right value.

### test/test.js

* Update the pattern `<%= %>` with the right value.
* Write tests.


MIT © [Yassine AZZOUT](http://yass.io)
