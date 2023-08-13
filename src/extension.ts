import * as vscode from "vscode";

async function vimPaste(
    textEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    args: { before: boolean },
) {
    console.log("Before: " + args.before);
    let text = await vscode.env.clipboard.readText();
    if (text.endsWith('\n')) {
        if (args.before) { // uppercase `P`
            await vscode.commands.executeCommand("modaledit.typeNormalKeys", {"keys": "0"});
        }
        else { // lowercase `p`
            await vscode.commands.executeCommand("modaledit.typeNormalKeys", {"keys": "j0"});
        }
        const position = textEditor.selection.active;
        await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
        await vscode.commands.executeCommand("modaledit.cancelSelection");
        console.log("Line:" + position.line);
        textEditor.selections = [new vscode.Selection(position, position)];
        await vscode.commands.executeCommand("modaledit.typeNormalKeys", {"keys": "^"});
    }
    else {
        if (args.before) { // uppercase `P`
            await vscode.commands.executeCommand("cursorRight");
        }
        else { // lowercase `p`
        }
        await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
        await vscode.commands.executeCommand("modaledit.cancelSelection");
    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerTextEditorCommand(
        "modalcommands.vimPaste",
        vimPaste,
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
