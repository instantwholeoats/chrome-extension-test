# Chrome extension samples

Small, dependency-free Chrome extension examples.

- `browser_action`: changes the active tab title after an explicit click. It uses temporary `activeTab` access instead of permanent access to every website.
- `github_blue`: changes the appearance of GitHub pages and is restricted to `https://github.com/*`.

Both examples use Manifest V3. Load either directory with Chrome's **Load unpacked** button.

Run the local checks with:

```sh
python3 -m unittest -v test_manifests.py
node --check browser_action/popup.js
node --check github_blue/main.js
```
