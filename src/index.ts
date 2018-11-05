
/* IMPORT */

import * as Listr from 'listr';

/* COMPOSE */

function compose ( ...listrs ) {

  const tasks: any[] = [];

  listrs.forEach ( listr => {

    listr._tasks.forEach ( _task => {

      const {title, task, skip, enabled} = _task;

      tasks.push ({ title, task, skip, enabled });

    });

  });

  return new Listr ( tasks );

}

/* EXPORT */

export = Object.assign ( compose, { default: compose } );
