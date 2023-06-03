import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MainPage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 203:80 */
export const MainPage: FC<Props> = memo(function MainPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.kevinFilms}>kevin films</div>
      <div className={classes.image1}></div>
      <div className={classes.image2}></div>
      <div className={classes.image3}></div>
      <div className={classes.text}>
        <a
          href='https://www.youtube.com/watch?v=SGDdmyoTZJM'
          target='_blank'
          rel='noreferrer'
          className={classes.textBlock}
        >
          {' '}
        </a>
      </div>
      <div className={classes.text2}>
        <a
          href='https://www.youtube.com/watch?v=aiMAgJ1t4X0'
          target='_blank'
          rel='noreferrer'
          className={classes.textBlock2}
        >
          {' '}
        </a>
      </div>
      <div className={classes.text3}>
        <a
          href='https://www.youtube.com/watch?v=SBhMIlQajFQ'
          target='_blank'
          rel='noreferrer'
          className={classes.textBlock3}
        >
          {' '}
        </a>
      </div>
      <div className={classes.iNDEX}>INDEX</div>
    </div>
  );
});
