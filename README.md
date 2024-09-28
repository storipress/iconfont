# fonts-next

Preview: https://fonts-next.pages.dev/demo

Repo for managing manager-next iconfonts

## What does this include?

- `iconfont`: The iconfont
- `terraform`: Script to deploy the iconfont
- `__tests__`: Tests to check icon font

## Update fonts

1. copy new fonts including version number
2. run prettier on `style.scss`
3. replace all `&:before` with `&::before`
4. remove all line contain `color: #525252;` https://stackoverflow.com/questions/51618226/visual-studio-code-removing-lines-containing-criteria
5. clean up `style.scss` via diff
6. rebuild `style.scss` with `yarn sass style.scss:style.css`
7. link `iconfont` to the newest version and remove the old version
8. run `yarn test` and verify snapshot
9. merge release branch


## For step 4, how to remove all line contain `color: #525252;`?
1. Cmd-F to open find.
2. Input `color: #525252;` to find.
3. Opt-Enter to select all of the instances of the string on the page.
4. Cmd-L to broaden the selection to the entire line of each instance on the page.
5. Delete/Backspace to remove those lines.
