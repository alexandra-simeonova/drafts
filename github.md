# GitHub process

## Cloning/forking:

This only needs to be done once when you are working in a new repository. More details can be found at https://kyma-project.io/community/contributing/#git-workflow-git-workflow-prepare-the-fork .

- Fork the desired repository in the GitHub website (button on the top right)
- Run `git clone git@github.com:{your-username}/{your-fork-name}.git` command
- In the terminal, navigate to the location of your fork (`cd {NameOfFOlder}`)
- Run the `git remote -v` command to list the current configured remote repository for your fork.
- Specify a new remote upstream repository to synchronize with the fork:
`git remote add upstream git@github.com:{original-owner}/{original-repository}.git`
- Verify the new upstream repository using the `git remote -v` command.
- Run the `git fetch --all` command to fetch all remote branches.
- Set up the local master branch to track the remote master branch from the upstream repository:
`git branch -u upstream/master master`
- To verify that your local master branch points to the upstream/master, run the git branch -vv command.

## Opening a PR (with Fork)

- Double-click on the desired repository in Fork.
- Pull from upstream/master to ensure you are up to date (click on the "Pull" button in the top left).
- Create a new branch by clicking on the "New branch" button (top right).
- Make sure the "Checkout after create" checkbox is checked.
- Go to Visual Studio code and make your changes. Make sure you are in the right branch - the branch name can be seen in the bottom left corner. Don't forget to save at the end.
- When making changes or adding new files, make sure to observe the Kyma content guidelines, especially the document types. Read more at https://kyma-project.io/community/guidelines/content/#content-strategy-content-strategy-documentation-types .
- Go back to Fork and click on "Local changes".
- Stage your changes by clicking on the "Stage" button.
- Write a commit message in the "Commit subject" box at the bottom and click on "Commit".
- Push your changes to the local origin repository (not to master) by clicking on the "Push" button.
- Go to the GitHub website of the repository and open a PR from there.
