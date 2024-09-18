/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Page} from 'components/Layout/Page';
import {MDXComponents} from 'components/MDX/MDXComponents';
import sidebarLearn from '../sidebarLearn.json';

const {Intro, MaxWidth, p: P, a: A} = MDXComponents;

export default function NotFound() {
  return (
    <Page toc={[]} meta={{title: 'Not Found'}} routeTree={sidebarLearn}>
      <MaxWidth>
        <Intro>
          <P>页面不存在</P>
          <P>
            请访问{', '}
            <A href="https://wku.edu.cn">温肯官网</A>
            {', '}
            提交issue
          </P>
        </Intro>
      </MaxWidth>
    </Page>
  );
}
