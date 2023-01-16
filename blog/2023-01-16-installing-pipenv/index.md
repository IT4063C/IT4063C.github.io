---
slug: installing-pipenv
title: Installing Pipenv
draft: false
authors: [ygilany]
tags: [Problem Solving]
---

## Purpose of this post
If you had issues installing pipenv on your Windows computer, This guide is for you.

## Instructions
### Pre-conditions
- You have Python 3.11 installed on your computer.
- You have pip installed on your computer.
- You're able to access pip from the command line.

### Installing PipEnv
- From your command line, run the following command:
```bash
pip uninstall virtualenv
pip uninstall pipenv
``` 
  - This command will uninstall any existing versions of PipEnv and VirtualEnv that you have installed on your computer.
- Run the following command:
```bash
pip install --user pipenv
```
  - This command will install PipEnv on your computer.
  - You may get a warning that says that certain scripts and packages are not in your PATH. Copy that PATH and [add it to your PATH environment variable](https://windowsloop.com/how-to-add-to-windows-path/#:~:text=Add%20directory%20or%20program%20to%20Windows%20PATH%201,full%20directory%20path%20of%20the%20program.%20More%20items).
- For the terminal to recognize the new PATH, you may need to restart your terminal (close and open).

### Post-conditions
To confirm that PipEnv is installed, run the following command:
```bash
pipenv --version
```

## Using PipEnv
For each assignment that you work on, you install its dependencies using the following command:
```bash
pipenv install
```
  - This command will install all the dependencies that are listed in the Pipfile.
  - It will also create a virtual environment for the project.

To learn more about pipenv:
  - check out the the [course notes](/course-notes/dev-env)
  - check out the [official documentation](https://pipenv.pypa.io/en/latest/).