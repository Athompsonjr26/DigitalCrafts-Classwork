# Git 101 Cheatsheet

## File states in your directory

* tracked - git is tracking the changes to this file
  * unmodified - the working version is identical the the committed version
  * modified - the working version differs from the committed version
  * staged - the working version differs from the committed version and is staged to be committed the next time `git commit` is issued
* untracked - git is not tracking this file and it will not be saved.

## Terms

* HEAD - also referred to as "branch tip", this is the current state

## Create a git repository from nothing

1. Create an empty directory: `mkdir <directory name>`
2. `git init`

## Add a new file to be tracked by the repository

`git add <file path>`

## Stage a files modifications to be committed

`git add <file path>`

## Commit staged changes

1. `git commit`
2. Type commit message in your editor
3. Close your editor
4. See in the terminal that git has successfully made the commit

## Automatically stage modified files and commit

`git commit -a`

## See the summary status of your working directory

`git status`

## See the history of the repository

`git log`

## See details of what's been modified

`git diff`

## Revise the previous commit

1. Make additional changes you want to make
2. `git commit --amend`
3. You made modify the commit message if you wish

## Remove current modifications to a file

This will undo the changes you made to a modified file and revert it back to the latest committed version

`git checkout <file path>`

## Checkout a specific commit sha

`git checkout <commit sha>`

## Revert a commit

This creates a new commit that reverts the specifies commit.

`git revert <commit sha>`

## Unsafely reverting commits

Reseting the repository history back to the specified commit, removing all subsequent commits. It however takes the changes caused by subsequent commits and moves them back to the working directory, making them look like uncommitted modifications.

`git reset <commit sha>`

## Push changes to a remote repository

`git push origin master`

## Clone a project from GitHub

`git clone <project HTTPS clone url>`

You can copy the URL from a project from its GitHub project page.
