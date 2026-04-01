# About releases

## Alpha releases

### Before release
Before releasing a new alpha.* version remember to:

- Update v* branch JSDocs
- Update main branch README.md
- Update ROADMAP.md
- Update main branch docs for website

### Steps to release alpha version to npm

1. run `npm login``
2. npm version prerelease --preid=alpha
3. npm run build
4. git push
5. npm publish --tag next