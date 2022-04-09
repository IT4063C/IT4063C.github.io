---
sidebar_position: 3
title: Python Installation and Env
---
* Python is a highly maintainable programming language. It is frequently updated with security patches, bug fixes, features, and enhancements.
* It's also a language that allows you to install different libraries and tools to extend it's functionality with pre-built functions and tools developed by python developers and tools. 
* Every one of those tools when installed, is installed globally for the whole computer. Whenever you start a new project that uses a library that was installed before, your computer knows to use that.
* Problems:
  * you may be working on different projects that require different versions of this library.
  * While python will try to install both, those libraries will tend to conflict.

* Solution
  * installing a virtualized python envirnoment. Where every project can have it's dedicated python env. that only has the dependencies that this particular project requires.

* Options
  * Virtualenv
  * Anaconda