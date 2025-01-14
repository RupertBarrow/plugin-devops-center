/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export type OutputFlags = {
  verbosity?: boolean;
  concise?: boolean;
};

/**
 * Service interface to print the output
 *
 * @author JuanStenghele-sf
 */
export interface OutputService {
  /**
   * Prints a summary of the operation being done
   */
  printOpSummary(): void;
}

/**
 * Abstract class that implements OutputService interface
 *
 * @author JuanStenghele-sf
 */
export abstract class AbstractOutputService<T extends OutputFlags> implements OutputService {
  // We will store here the command flags
  protected flags: T;

  public constructor(flags: T) {
    this.flags = flags;
  }

  public abstract printOpSummary(): void;
}
