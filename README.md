# &lt;github-gist&gt;

A [Polymer](http://polymer-project.org) element for displaying github [gists](https://gist.github.com)

## Demo

> [Check it live](http://dmaslov.github.io/github-gist).

## Installation

Install using [Bower](http://bower.io):

```shell
 bower install github-gist
```

## Usage

* Import Web Components' polyfill:

```
<script src="bower_components/platform/platform.js"></script>
<script src="bower_components/polymer/polymer.js"></script>
```

* Import Custom Element:

```
<link rel="import" href="bower_components/github-gist/github-gist.html">
```

* Start using it!

```
<github-gist gistid="e54a2ed1b12934d3e134"></github-gist>
```

* You can use your own stylesheets

![monokai.css](http://i.imgur.com/abADNVW.png)

Provide path to your external css file to `stylesheet` attribute

```
<github-gist gistid="e54a2ed1b12934d3e134" stylesheet="themes/monokai.css"></github-gist>
```

We added example stylesheet `monokai.css` by [@hofiorg](https://github.com/hofiorg) in `themes` folder.

##### Feel free to populate our stylesheet library!

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`gistid`      | *string*                  | ``                  | id of gist that will be loaded
`stylesheet`      | *string*                  | ``                  | path to css file


## Examples:

```
<github-gist gistid="e54a2ed1b12934d3e134"></github-gist>
```
## License

[MIT License](http://opensource.org/licenses/MIT)
