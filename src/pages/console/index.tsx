import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';

import styles from './index.less';

export default (props: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  return <div>ddd</div>;
};
