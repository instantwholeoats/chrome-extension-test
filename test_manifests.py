import json
import unittest
from pathlib import Path


ROOT = Path(__file__).parent


class ManifestTests(unittest.TestCase):
    def load(self, extension):
        return json.loads((ROOT / extension / "manifest.json").read_text())

    def test_all_extensions_use_manifest_v3(self):
        for extension in ("browser_action", "github_blue"):
            with self.subTest(extension=extension):
                self.assertEqual(3, self.load(extension)["manifest_version"])

    def test_browser_action_uses_temporary_tab_access(self):
        manifest = self.load("browser_action")
        self.assertEqual({"activeTab", "scripting"}, set(manifest["permissions"]))
        self.assertNotIn("host_permissions", manifest)
        self.assertNotIn("content_scripts", manifest)

    def test_github_extension_is_limited_to_github(self):
        scripts = self.load("github_blue")["content_scripts"]
        self.assertEqual(["https://github.com/*"], scripts[0]["matches"])


if __name__ == "__main__":
    unittest.main()
