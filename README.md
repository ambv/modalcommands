# ambv.modalcommands

This is a set of additional commands that I use in conjunction with
[ModalEdit](https://marketplace.visualstudio.com/items?itemName=johtela.vscode-modaledit) to enable faster workflows.

## Features

### modalcommands.vimPaste

When pasting content that consists of full lines, Vim provides special
support that makes editing faster:
- `P` causes the lines to be fully inserted before the current cursor
  line;
- `p` causes the lines to be fully inserted after the current cursor
  line.

This happens even if the cursor is in the middle of the line. In both
cases the cursor gets placed at the ^start of the first inserted line. 

To configure this, add to `"modaledit.keybindings"`:
```
"p": {
    "command": "modalcommands.vimPaste",
    "args": {
        "before": false
    }
},
"P": {
    "command": "modalcommands.vimPaste",
    "args": {
        "before": true
    }
},
```

## Requirements

VS Code + `johtela.ModalEdit`. I mean, you can run the commands here
straight from the palette but it won't be very fast.

## Extension Settings

See the documentation or `johtela.ModalEdit` on how to add these
commands to `modaledit.keybindings`.

## Known Issues

I don't exactly know what I'm doing.

## Release Notes

### 23.8.1

No functional changes. Includes an icon.

### 23.8.0

Initial release. Just `modalcommands.vimPaste` present.