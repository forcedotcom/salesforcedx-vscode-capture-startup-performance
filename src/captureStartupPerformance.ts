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
  // TODO: create dummy functions for the following in the scaffolding:
  // open Developer: Startup Performance (open via API - try "perfview.show")
  // save startup performance file (TODO: how to do this without popup dialog?)
  // read startup performance file using fs.readFileSync()
  // parse startup performance file using marked
  // save parsed results to a file
  // send parsed results to appinsights

  // TODO: also need to communicate with the customer
    // is it possible to block the UI without also blocking what we need to do?
    // is it possible to open a file but keep it hidden?
    // TODO: schedule time with Meg after everything except telemetry is working and it can be demoed
};
