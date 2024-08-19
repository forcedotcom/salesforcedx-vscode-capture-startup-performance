/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export class CaptureStartupPerformance {
  constructor() {
    console.log('Constructor - This is the Capture Startup Performance class!');
  }
}

export const captureStartupPerformance = async (): Promise<void> => {
  console.log('Method - This is the Capture Startup Performance class!');
  // open Developer: Startup Performance (open via API - try "perfview.show")
  await openStartupPerformanceFile();
  // save startup performance file (TODO: how to do this without popup dialog?)
  const fileName = await saveCurrentFile();
  // read startup performance file using fs.readFileSync()
  const fileContents = await readStartupPerformanceFile(fileName);
  // parse startup performance file using marked
  const parsedResults = await parseStartupPerformanceFile(fileContents);
  // save parsed results to a file
  await copyContentsToFile(parsedResults);
  const parsedResultsFile = await saveCurrentFile();
  // send parsed results to appinsights
  await sendToAppInsights(parsedResultsFile);

  // TODO: also need to communicate with the customer
    // is it possible to block the UI without also blocking what we need to do?
    // is it possible to open a file but keep it hidden?
    // TODO: schedule time with Meg after everything except telemetry is working and it can be demoed
};

// ------- Helper Functions -------

const openStartupPerformanceFile = async(): Promise<void> => {}

const saveCurrentFile = async(): Promise<string> => {
  return 'filename of saved file';
}

const readStartupPerformanceFile = async(fileName: string): Promise<string> => {
  return 'contents of startup performance file';
}

const parseStartupPerformanceFile = async(fileContents: string): Promise<string> => {
  return 'parsed contents of Extension Activation Stats table';
}

const copyContentsToFile = async(contents: string): Promise<void> => {}

const sendToAppInsights = async(fileName: string): Promise<void> => {}
