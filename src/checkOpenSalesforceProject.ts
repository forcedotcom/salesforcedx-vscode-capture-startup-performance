/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from "path";

// Helper function to check if a Salesforce project is opened
export const isSalesforceProjectOpened = (): boolean => {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (workspaceFolders) {
    for (const folder of workspaceFolders) {
      const sfdxProjectPath = path.join(folder.uri.fsPath, 'sfdx-project.json');
      if (fs.existsSync(sfdxProjectPath)) {
        return true;
      }
    }
  }
  return false;
};
