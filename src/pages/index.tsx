import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';

import styles from './index.less';

export default (props: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //检查token
    console.log(window.location.search);
    // if (
    //   window.location.search.indexOf('?access_token') >= 0 ||
    //   window.location.hash.indexOf('?access_token') >= 0
    // ) {
    //   setLoading(false);
    // }
  }, []);

  if (loading) {
    return (
      <div className={classnames(styles.container)}>
        <Spin></Spin>
      </div>
    );
  }

  return <>{props.children}</>;
};
