import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { ENV, GMT_ID } from '~/utils';

const tagManagerArgs: TagManagerArgs = {
  gtmId: GMT_ID ?? '',
};

const getGmtId = (): TagManagerArgs => tagManagerArgs;

const init = (): void => {
  if (ENV === 'PRD') {
    TagManager.initialize(tagManagerArgs);
  }
};

export const GoogleTagManager = {
  getGmtId,
  init,
};
