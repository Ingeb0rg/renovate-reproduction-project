# 40914

## Current behavior
- Merge requests are created for all package-lock.json files.
- The merge requests do not have any label.
- Furthermore, I can only find a reference to NodeJS version 24 in the log, but not version 22.

## Expected behavior
- Only package-lock.json in the main directory and in `packages/Frontend1` directory should be updated.
- Depending on the manager, there may be other labels.
- NodeJS version 22 should be used in the main directory and version 24 in `packages/Frontend1` directory.

## Link to the Renovate issue or Discussion
https://github.com/renovatebot/renovate/discussions/40914
