const testResults = {
    "numFailedTestSuites": 15,
    "numFailedTests": 17,
    "numPassedTestSuites": 16,
    "numPassedTests": 84,
    "numPendingTestSuites": 0,
    "numPendingTests": 1,
    "numRuntimeErrorTestSuites": 2,
    "numTodoTests": 0,
    "numTotalTestSuites": 31,
    "numTotalTests": 102,
    "openHandles": [],
    "snapshot": {
      "added": 0,
      "didUpdate": false,
      "failure": false,
      "filesAdded": 0,
      "filesRemoved": 0,
      "filesUnmatched": 0,
      "filesUpdated": 0,
      "matched": 8,
      "total": 8,
      "unchecked": 0,
      "uncheckedKeysByFile": [],
      "unmatched": 0,
      "updated": 0
    },
    "startTime": 1564516208115,
    "success": false,
    "testResults": [
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mPayment Container › renders properly\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'primary' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 52 | \u001b[39m  it(\u001b[32m'renders properly'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 53 | \u001b[39m    \u001b[36mconst\u001b[39m { props\u001b[33m,\u001b[39m state } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 54 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mPayments\u001b[39m store\u001b[33m=\u001b[39m{mockStore(state)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 55 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 56 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 57 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/finance/accounts/index.js\u001b[2m:10151:48\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1293:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1383:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1382:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1417:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/payments/containers/paymentContainer.test.tsx\u001b[39m\u001b[0m\u001b[2m:54:21)\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mPayment Container › gets the valid component in case of balance transfer\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'primary' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 66 | \u001b[39m    \u001b[36mconst\u001b[39m { props\u001b[33m,\u001b[39m state } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 67 | \u001b[39m    state\u001b[33m.\u001b[39mpayment\u001b[33m.\u001b[39mpaymentDetails\u001b[33m.\u001b[39mpayment_type \u001b[33m=\u001b[39m \u001b[32m'UK.OBIE.BalanceTransfer'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 68 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mPayments\u001b[39m store\u001b[33m=\u001b[39m{mockStore(state)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 69 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 70 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 71 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/finance/accounts/index.js\u001b[2m:10151:48\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1293:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1383:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1382:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1417:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/payments/containers/paymentContainer.test.tsx\u001b[39m\u001b[0m\u001b[2m:68:21)\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mPayment Container › gets the valid component in case of fps\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'primary' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 73 | \u001b[39m    \u001b[36mconst\u001b[39m { props\u001b[33m,\u001b[39m state } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 74 | \u001b[39m    state\u001b[33m.\u001b[39mpayment\u001b[33m.\u001b[39mpaymentDetails\u001b[33m.\u001b[39mpayment_type \u001b[33m=\u001b[39m \u001b[32m'UK.OBIE.FPS'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 75 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mPayments\u001b[39m store\u001b[33m=\u001b[39m{mockStore(state)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 76 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 77 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/finance/accounts/index.js\u001b[2m:10151:48\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1293:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1383:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1382:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/organisms/modals/index.js\u001b[2m:1417:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/payments/containers/paymentContainer.test.tsx\u001b[39m\u001b[0m\u001b[2m:75:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 3,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516211934,
          "start": 1564516209028
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 2,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/segment/payments/containers/paymentContainer.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Payment Container"
            ],
            "duration": 148,
            "failureMessages": [
              "TypeError: Cannot read property 'primary' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/finance/accounts/index.js:10151:48\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1293:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1383:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1382:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1417:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/payments/containers/paymentContainer.test.tsx:54:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Payment Container renders properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders properly"
          },
          {
            "ancestorTitles": [
              "Payment Container"
            ],
            "duration": 11,
            "failureMessages": [],
            "fullName": "Payment Container renderComponent returns error page when invalid payment type",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renderComponent returns error page when invalid payment type"
          },
          {
            "ancestorTitles": [
              "Payment Container"
            ],
            "duration": 18,
            "failureMessages": [
              "TypeError: Cannot read property 'primary' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/finance/accounts/index.js:10151:48\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1293:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1383:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1382:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1417:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/payments/containers/paymentContainer.test.tsx:68:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Payment Container gets the valid component in case of balance transfer",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "gets the valid component in case of balance transfer"
          },
          {
            "ancestorTitles": [
              "Payment Container"
            ],
            "duration": 12,
            "failureMessages": [
              "TypeError: Cannot read property 'primary' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/finance/accounts/index.js:10151:48\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1293:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1383:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1382:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/organisms/modals/index.js:1417:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/payments/containers/paymentContainer.test.tsx:75:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Payment Container gets the valid component in case of fps",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "gets the valid component in case of fps"
          },
          {
            "ancestorTitles": [
              "Payment Container"
            ],
            "duration": 18,
            "failureMessages": [],
            "fullName": "Payment Container renders loader properly in case of no payment details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders loader properly in case of no payment details"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1minitRoute > redirectToLogin › can redirect to IDV for payments\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).toBeCalled()\u001b[22m\n\n    Expected mock function to have been called, but it was not called.\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 102 | \u001b[39m    await initRoute\u001b[33m.\u001b[39mredirectToLogin(config\u001b[33m,\u001b[39m bootApp)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 103 | \u001b[39m    \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 104 | \u001b[39m    expect(window\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39massign)\u001b[33m.\u001b[39mtoBeCalled()\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m     | \u001b[39m                                   \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 105 | \u001b[39m    expect(window\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39massign)\u001b[33m.\u001b[39mtoBeCalledWith(idvRedirectPaymentUrl)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 106 | \u001b[39m    execPreFetchSpy\u001b[33m.\u001b[39mmockClear()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 107 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/app/initRoute.test.ts\u001b[39m\u001b[0m\u001b[2m:104:36)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat step (\u001b[2m\u001b[0m\u001b[36msrc/test/app/initRoute.test.ts\u001b[39m\u001b[0m\u001b[2m:43:23)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.next (\u001b[2m\u001b[0m\u001b[36msrc/test/app/initRoute.test.ts\u001b[39m\u001b[0m\u001b[2m:24:53)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fulfilled (\u001b[2m\u001b[0m\u001b[36msrc/test/app/initRoute.test.ts\u001b[39m\u001b[0m\u001b[2m:15:58)\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[1minitRoute > redirectToLogin › can redirect to IDV for accounts\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).toBeCalled()\u001b[22m\n\n    Expected mock function to have been called, but it was not called.\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 113 | \u001b[39m    initRoute\u001b[33m.\u001b[39mredirectToLogin(config\u001b[33m,\u001b[39m bootApp)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 114 | \u001b[39m    \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 115 | \u001b[39m    expect(window\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39massign)\u001b[33m.\u001b[39mtoBeCalled()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m     | \u001b[39m                                   \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 116 | \u001b[39m    expect(window\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39massign)\u001b[33m.\u001b[39mtoBeCalledWith(idvRedirectUrl)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 117 | \u001b[39m  })\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 118 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/app/initRoute.test.ts\u001b[39m\u001b[0m\u001b[2m:115:36)\u001b[2m\u001b[22m\n",
        "numFailingTests": 2,
        "numPassingTests": 6,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516212585,
          "start": 1564516212044
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "initRoute > executePreFetch"
            ],
            "duration": 7,
            "failureMessages": [],
            "fullName": "initRoute > executePreFetch can fetch data from http://somerandomurl.com properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can fetch data from http://somerandomurl.com properly"
          },
          {
            "ancestorTitles": [
              "initRoute > executePreFetch"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "initRoute > executePreFetch can reject response on failure to fetch data from http://somerandomurl.com",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can reject response on failure to fetch data from http://somerandomurl.com"
          },
          {
            "ancestorTitles": [
              "initRoute > setSegment"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "initRoute > setSegment can set segment properly with scope",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can set segment properly with scope"
          },
          {
            "ancestorTitles": [
              "initRoute > setSegment"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "initRoute > setSegment can set segment properly with route",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can set segment properly with route"
          },
          {
            "ancestorTitles": [
              "initRoute > setSegment"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "initRoute > setSegment can identify mobile routes",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can identify mobile routes"
          },
          {
            "ancestorTitles": [
              "initRoute > redirectToLogin"
            ],
            "duration": 12,
            "failureMessages": [],
            "fullName": "initRoute > redirectToLogin can render error on prefetch failure",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can render error on prefetch failure"
          },
          {
            "ancestorTitles": [
              "initRoute > redirectToLogin"
            ],
            "duration": 5,
            "failureMessages": [
              "Error: \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).toBeCalled()\u001b[22m\n\nExpected mock function to have been called, but it was not called.\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts:104:36)\n    at step (/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts:43:23)\n    at Object.next (/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts:24:53)\n    at fulfilled (/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts:15:58)\n    at <anonymous>"
            ],
            "fullName": "initRoute > redirectToLogin can redirect to IDV for payments",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can redirect to IDV for payments"
          },
          {
            "ancestorTitles": [
              "initRoute > redirectToLogin"
            ],
            "duration": 2,
            "failureMessages": [
              "Error: \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).toBeCalled()\u001b[22m\n\nExpected mock function to have been called, but it was not called.\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/app/initRoute.test.ts:115:36)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "initRoute > redirectToLogin can redirect to IDV for accounts",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can redirect to IDV for accounts"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mAccounts Container › renders properly\u001b[39m\u001b[22m\n\n    Invariant Violation: Could not find \"store\" in the context of \"Connect(RegisterIntent)\". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(RegisterIntent) in connect options.\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 51 | \u001b[39m  it(\u001b[32m'renders properly'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 52 | \u001b[39m    \u001b[36mconst\u001b[39m { props\u001b[33m,\u001b[39m state } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 53 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mAccounts\u001b[39m store\u001b[33m=\u001b[39m{mockStore(state)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 54 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 55 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 56 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat invariant (\u001b[2mnode_modules/invariant/invariant.js\u001b[2m:40:15)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ConnectFunction (\u001b[2mnode_modules/react-redux/lib/components/connectAdvanced.js\u001b[2m:154:33)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderWithHooks (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:12938:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateFunctionComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14627:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateSimpleMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14573:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14492:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15689:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/accounts/containers/accountContainer.test.tsx\u001b[39m\u001b[0m\u001b[2m:53:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516213006,
          "start": 1564516212593
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 2,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/accountContainer.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Accounts Container"
            ],
            "duration": 52,
            "failureMessages": [
              "Invariant Violation: Could not find \"store\" in the context of \"Connect(RegisterIntent)\". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(RegisterIntent) in connect options.\n    at invariant (/Users/r906305/Desktop/myPsd2/application/node_modules/invariant/invariant.js:40:15)\n    at ConnectFunction (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/components/connectAdvanced.js:154:33)\n    at renderWithHooks (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:12938:18)\n    at updateFunctionComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14627:20)\n    at updateSimpleMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14573:10)\n    at updateMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14492:14)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15689:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/accountContainer.test.tsx:53:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Accounts Container renders properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders properly"
          },
          {
            "ancestorTitles": [
              "Accounts Container"
            ],
            "duration": 10,
            "failureMessages": [],
            "fullName": "Accounts Container renders loader properly in case of no consent",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders loader properly in case of no consent"
          },
          {
            "ancestorTitles": [
              "Accounts Container"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Accounts Container renderComponent returns error page when invalid consent",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renderComponent returns error page when invalid consent"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mRegister Intent Container › renders properly\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'theme' of null\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 | \u001b[39m  it(\u001b[32m'renders properly'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 | \u001b[39m    \u001b[36mconst\u001b[39m { props\u001b[33m,\u001b[39m state } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 29 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mRegisterIntent\u001b[39m store\u001b[33m=\u001b[39m{mockStore(state)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 30 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat WithTheme.render (\u001b[2mnode_modules/emotion-theming/dist/index.cjs.js\u001b[2m:216:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/accounts/containers/registerIntent.test.tsx\u001b[39m\u001b[0m\u001b[2m:29:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516213370,
          "start": 1564516213028
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/registerIntent.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Register Intent Container"
            ],
            "duration": 59,
            "failureMessages": [
              "TypeError: Cannot read property 'theme' of null\n    at WithTheme.render (/Users/r906305/Desktop/myPsd2/application/node_modules/emotion-theming/dist/index.cjs.js:216:27)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/registerIntent.test.tsx:29:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Register Intent Container renders properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mNo Accounts Container › renders\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'bodyText' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 | \u001b[39m  it(\u001b[32m'renders'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 33 | \u001b[39m    \u001b[36mconst\u001b[39m { mockState\u001b[33m,\u001b[39m props } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 34 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mNoAccountContainer\u001b[39m store\u001b[33m=\u001b[39m{mockStore(mockState)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 35 | \u001b[39m    expect(wrapper)\u001b[33m.\u001b[39mtoBeDefined()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 36 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 37 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/molecules/tile/index.js\u001b[2m:8117:29\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1754:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1844:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1843:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1878:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/common/containers/noAccount.test.tsx\u001b[39m\u001b[0m\u001b[2m:34:21)\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mNo Accounts Container › can handle submit\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'bodyText' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 39 | \u001b[39m  it(\u001b[32m'can handle submit'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 40 | \u001b[39m    \u001b[36mconst\u001b[39m { mockState\u001b[33m,\u001b[39m props } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 41 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mNoAccountContainer\u001b[39m store\u001b[33m=\u001b[39m{mockStore(mockState)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 42 | \u001b[39m    \u001b[36mconst\u001b[39m button \u001b[33m=\u001b[39m wrapper\u001b[33m.\u001b[39mfind(\u001b[32m'#noAccountRedirect'\u001b[39m)\u001b[33m.\u001b[39mhostNodes()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 43 | \u001b[39m    window\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39massign \u001b[33m=\u001b[39m jest\u001b[33m.\u001b[39mfn()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 44 | \u001b[39m    button\u001b[33m.\u001b[39msimulate(\u001b[32m'click'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/molecules/tile/index.js\u001b[2m:8117:29\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1754:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1844:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1843:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1878:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/common/containers/noAccount.test.tsx\u001b[39m\u001b[0m\u001b[2m:41:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 2,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516213742,
          "start": 1564516213394
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/common/containers/noAccount.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "No Accounts Container"
            ],
            "duration": 80,
            "failureMessages": [
              "TypeError: Cannot read property 'bodyText' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/molecules/tile/index.js:8117:29\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1754:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1844:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1843:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1878:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/common/containers/noAccount.test.tsx:34:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "No Accounts Container renders",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders"
          },
          {
            "ancestorTitles": [
              "No Accounts Container"
            ],
            "duration": 3,
            "failureMessages": [
              "TypeError: Cannot read property 'bodyText' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/molecules/tile/index.js:8117:29\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1754:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1844:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1843:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1878:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/common/containers/noAccount.test.tsx:41:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "No Accounts Container can handle submit",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can handle submit"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mManage Consent Container › renders properly\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'consents' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 137 | \u001b[39m    loading\u001b[33m:\u001b[39m ui\u001b[33m.\u001b[39misLoaderOpen\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 138 | \u001b[39m    content\u001b[33m:\u001b[39m ui\u001b[33m.\u001b[39mcontent\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 139 | \u001b[39m    consents\u001b[33m:\u001b[39m manageConsent\u001b[33m.\u001b[39mconsents\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m     | \u001b[39m                            \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 140 | \u001b[39m    error\u001b[33m:\u001b[39m manageConsent\u001b[33m.\u001b[39mconsentsError\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 141 | \u001b[39m    accounts\u001b[33m:\u001b[39m manageConsent\u001b[33m.\u001b[39mconsentAccounts\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 142 | \u001b[39m    consentType\u001b[33m:\u001b[39m manageConsent\u001b[33m.\u001b[39mconsentType\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Function.mapStateToProps [as mapToProps] (\u001b[2msrc/segment/manageConsents/containers/manageConsentContainer.tsx\u001b[2m:139:29)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mapToPropsProxy (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:53:92)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Function.detectFactoryAndVerify (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:62:19)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mapToPropsProxy (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:53:46)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat handleFirstCall (\u001b[2mnode_modules/react-redux/lib/connect/selectorFactory.js\u001b[2m:34:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat pureFinalPropsSelector (\u001b[2mnode_modules/react-redux/lib/connect/selectorFactory.js\u001b[2m:75:81)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-redux/lib/components/connectAdvanced.js\u001b[2m:225:16\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mountMemo (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:13459:19)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.useMemo (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:13668:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat useMemo (\u001b[2mnode_modules/react/cjs/react.development.js\u001b[2m:1492:21)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ConnectFunction (\u001b[2mnode_modules/react-redux/lib/components/connectAdvanced.js\u001b[2m:210:30)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderWithHooks (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:12938:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateFunctionComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14627:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateSimpleMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14573:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14492:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15689:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/manageConsents/containers/manageConsentContainer.test.tsx\u001b[39m\u001b[0m\u001b[2m:28:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516214132,
          "start": 1564516213770
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/segment/manageConsents/containers/manageConsentContainer.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Manage Consent Container"
            ],
            "duration": 63,
            "failureMessages": [
              "TypeError: Cannot read property 'consents' of undefined\n    at Function.mapStateToProps [as mapToProps] (/Users/r906305/Desktop/myPsd2/application/src/segment/manageConsents/containers/manageConsentContainer.tsx:139:29)\n    at mapToPropsProxy (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:53:92)\n    at Function.detectFactoryAndVerify (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:62:19)\n    at mapToPropsProxy (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:53:46)\n    at handleFirstCall (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/selectorFactory.js:34:18)\n    at pureFinalPropsSelector (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/selectorFactory.js:75:81)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/components/connectAdvanced.js:225:16\n    at mountMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:13459:19)\n    at Object.useMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:13668:16)\n    at useMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react/cjs/react.development.js:1492:21)\n    at ConnectFunction (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/components/connectAdvanced.js:210:30)\n    at renderWithHooks (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:12938:18)\n    at updateFunctionComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14627:20)\n    at updateSimpleMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14573:10)\n    at updateMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14492:14)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15689:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/manageConsents/containers/manageConsentContainer.test.tsx:28:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Manage Consent Container renders properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mRefresh Container › renders properly\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'authoriseConsentError' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 75 | \u001b[39m  consent\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39maccountConsent\u001b[33m.\u001b[39mconsent\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 76 | \u001b[39m  brand\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39msession\u001b[33m.\u001b[39mconfig\u001b[33m.\u001b[39mbrandId\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 77 | \u001b[39m  error\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39mrefreshAccess\u001b[33m.\u001b[39mauthoriseConsentError\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                             \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 78 | \u001b[39m  isFinalError\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39mrefreshAccess\u001b[33m.\u001b[39misFinalError\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 79 | \u001b[39m  session\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39msession\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 80 | \u001b[39m  loading\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39mui\u001b[33m.\u001b[39misLoaderOpen\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Function.Object.<anonymous>.exports.mapStateToProps [as mapToProps] (\u001b[2msrc/segment/accounts/containers/refreshAccess.tsx\u001b[2m:77:30)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mapToPropsProxy (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:53:92)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Function.detectFactoryAndVerify (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:62:19)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mapToPropsProxy (\u001b[2mnode_modules/react-redux/lib/connect/wrapMapToProps.js\u001b[2m:53:46)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat handleFirstCall (\u001b[2mnode_modules/react-redux/lib/connect/selectorFactory.js\u001b[2m:34:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat pureFinalPropsSelector (\u001b[2mnode_modules/react-redux/lib/connect/selectorFactory.js\u001b[2m:75:81)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-redux/lib/components/connectAdvanced.js\u001b[2m:225:16\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mountMemo (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:13459:19)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.useMemo (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:13668:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat useMemo (\u001b[2mnode_modules/react/cjs/react.development.js\u001b[2m:1492:21)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ConnectFunction (\u001b[2mnode_modules/react-redux/lib/components/connectAdvanced.js\u001b[2m:210:30)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderWithHooks (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:12938:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateFunctionComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14627:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateSimpleMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14573:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateMemoComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14492:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15689:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/segment/accounts/containers/refreshAccess.test.tsx\u001b[39m\u001b[0m\u001b[2m:30:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516214496,
          "start": 1564516214159
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/refreshAccess.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Refresh Container"
            ],
            "duration": 54,
            "failureMessages": [
              "TypeError: Cannot read property 'authoriseConsentError' of undefined\n    at Function.Object.<anonymous>.exports.mapStateToProps [as mapToProps] (/Users/r906305/Desktop/myPsd2/application/src/segment/accounts/containers/refreshAccess.tsx:77:30)\n    at mapToPropsProxy (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:53:92)\n    at Function.detectFactoryAndVerify (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:62:19)\n    at mapToPropsProxy (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/wrapMapToProps.js:53:46)\n    at handleFirstCall (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/selectorFactory.js:34:18)\n    at pureFinalPropsSelector (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/connect/selectorFactory.js:75:81)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/components/connectAdvanced.js:225:16\n    at mountMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:13459:19)\n    at Object.useMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:13668:16)\n    at useMemo (/Users/r906305/Desktop/myPsd2/application/node_modules/react/cjs/react.development.js:1492:21)\n    at ConnectFunction (/Users/r906305/Desktop/myPsd2/application/node_modules/react-redux/lib/components/connectAdvanced.js:210:30)\n    at renderWithHooks (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:12938:18)\n    at updateFunctionComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14627:20)\n    at updateSimpleMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14573:10)\n    at updateMemoComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14492:14)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15689:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/segment/accounts/containers/refreshAccess.test.tsx:30:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Refresh Container renders properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mError Page Container › renders\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'bodyText' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 | \u001b[39m  it(\u001b[32m'renders'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 29 | \u001b[39m    \u001b[36mconst\u001b[39m { mockState\u001b[33m,\u001b[39m props } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 30 | \u001b[39m    \u001b[36mconst\u001b[39m wrapper \u001b[33m=\u001b[39m mount(\u001b[33m<\u001b[39m\u001b[33mErrorPageContainer\u001b[39m store\u001b[33m=\u001b[39m{mockStore(mockState)} {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 | \u001b[39m    expect(wrapper)\u001b[33m.\u001b[39mtoBeDefined()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 33 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/molecules/tile/index.js\u001b[2m:8117:29\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1257:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1347:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1346:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1381:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14741:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:14696:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:15644:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19312:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19352:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19435:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20342:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20090:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:19911:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20572:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20600:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20657:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactRoot.Object.<anonymous>.ReactRoot.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20953:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21090:14\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat unbatchedUpdates (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20454:14)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat legacyRenderSubtreeIntoContainer (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21086:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.render (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:21155:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat render (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:429:26)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fn (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:37)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.batchedUpdates$1 [as unstable_batchedUpdates] (\u001b[2mnode_modules/react-dom/cjs/react-dom.development.js\u001b[2m:20439:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.act (\u001b[2mnode_modules/react-dom/cjs/react-dom-test-utils.development.js\u001b[2m:1161:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:346:13)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.wrapAct [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:415:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat new render (\u001b[2mnode_modules/enzyme/src/ReactWrapper.js\u001b[2m:115:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.mount (\u001b[2mnode_modules/enzyme/src/mount.js\u001b[2m:10:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/common/containers/error.test.tsx\u001b[39m\u001b[0m\u001b[2m:30:21)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 1,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516214960,
          "start": 1564516214600
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/common/containers/error.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Error Page Container"
            ],
            "duration": 77,
            "failureMessages": [
              "TypeError: Cannot read property 'bodyText' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/molecules/tile/index.js:8117:29\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1257:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1347:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1346:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1381:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14741:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:14696:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:15644:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19312:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19352:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19435:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20342:7)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20090:7)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:19911:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20572:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20600:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20657:10)\n    at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20953:3)\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21090:14\n    at unbatchedUpdates (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20454:14)\n    at legacyRenderSubtreeIntoContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21086:5)\n    at Object.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:21155:12)\n    at render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:429:26)\n    at fn (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:37)\n    at Object.batchedUpdates$1 [as unstable_batchedUpdates] (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom.development.js:20439:12)\n    at Object.act (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1161:27)\n    at act (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:346:13)\n    at Object.wrapAct [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:415:16)\n    at new render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ReactWrapper.js:115:16)\n    at Object.mount (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/mount.js:10:10)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/common/containers/error.test.tsx:30:21)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Error Page Container renders",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders"
          },
          {
            "ancestorTitles": [
              "Error Page Container"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Error Page Container handle button click properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "pending",
            "title": "handle button click properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mError Page scanpshots ... › renders\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'bodyText' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 18 | \u001b[39m  it(\u001b[32m'renders'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 19 | \u001b[39m    \u001b[36mconst\u001b[39m { wrapper } \u001b[33m=\u001b[39m setup()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 20 | \u001b[39m    expect(wrapper\u001b[33m.\u001b[39mhtml())\u001b[33m.\u001b[39mtoMatchSnapshot()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 21 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 22 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 23 | \u001b[39m  it(\u001b[32m'renders element correctly'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/molecules/tile/index.js\u001b[2m:8117:29\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1257:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1347:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1346:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/atoms/text/index.js\u001b[2m:1381:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat processChild (\u001b[2mnode_modules/react-dom/cjs/react-dom-server.node.development.js\u001b[2m:2959:18)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat resolve (\u001b[2mnode_modules/react-dom/cjs/react-dom-server.node.development.js\u001b[2m:2812:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactDOMServerRenderer.render (\u001b[2mnode_modules/react-dom/cjs/react-dom-server.node.development.js\u001b[2m:3202:22)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ReactDOMServerRenderer.read (\u001b[2mnode_modules/react-dom/cjs/react-dom-server.node.development.js\u001b[2m:3161:29)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.renderToStaticMarkup (\u001b[2mnode_modules/react-dom/cjs/react-dom-server.node.development.js\u001b[2m:3661:27)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.renderToStaticMarkup [as render] (\u001b[2mnode_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js\u001b[2m:742:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ShallowWrapper.render (\u001b[2mnode_modules/enzyme/src/ShallowWrapper.js\u001b[2m:1094:23)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ShallowWrapper.call [as single] (\u001b[2mnode_modules/enzyme/src/ShallowWrapper.js\u001b[2m:1638:21)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat ShallowWrapper.single [as html] (\u001b[2mnode_modules/enzyme/src/ShallowWrapper.js\u001b[2m:1090:17)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/common/components/error.test.tsx\u001b[39m\u001b[0m\u001b[2m:20:20)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516215288,
          "start": 1564516214990
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/common/components/error.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Error Page scanpshots ..."
            ],
            "duration": 50,
            "failureMessages": [
              "TypeError: Cannot read property 'bodyText' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/molecules/tile/index.js:8117:29\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1257:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1347:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1346:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/atoms/text/index.js:1381:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at processChild (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-server.node.development.js:2959:18)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-server.node.development.js:2812:5)\n    at ReactDOMServerRenderer.render (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-server.node.development.js:3202:22)\n    at ReactDOMServerRenderer.read (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-server.node.development.js:3161:29)\n    at Object.renderToStaticMarkup (/Users/r906305/Desktop/myPsd2/application/node_modules/react-dom/cjs/react-dom-server.node.development.js:3661:27)\n    at Object.renderToStaticMarkup [as render] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:742:31)\n    at ShallowWrapper.render (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ShallowWrapper.js:1094:23)\n    at ShallowWrapper.call [as single] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ShallowWrapper.js:1638:21)\n    at ShallowWrapper.single [as html] (/Users/r906305/Desktop/myPsd2/application/node_modules/enzyme/src/ShallowWrapper.js:1090:17)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/common/components/error.test.tsx:20:20)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Error Page scanpshots ... renders",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "renders"
          },
          {
            "ancestorTitles": [
              "Error Page scanpshots ..."
            ],
            "duration": 7,
            "failureMessages": [],
            "fullName": "Error Page scanpshots ... renders element correctly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders element correctly"
          },
          {
            "ancestorTitles": [
              "Error Page scanpshots ..."
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Error Page scanpshots ... renders text correctly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders text correctly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mapp error should create snapshot\u001b[39m\u001b[22m\n\n    TypeError: Cannot read property 'bodyText' of undefined\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 5 | \u001b[39mtest(\u001b[32m'app error should create snapshot'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 6 | \u001b[39m  \u001b[36mconst\u001b[39m component \u001b[33m=\u001b[39m renderer\u001b[33m.\u001b[39mcreate(\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m   | \u001b[39m                             \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 7 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mAppError\u001b[39m type\u001b[33m=\u001b[39m{\u001b[32m'GENERIC_ERROR'\u001b[39m} redirectURI\u001b[33m=\u001b[39m{\u001b[32m'http://some-random-url.com'\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 8 | \u001b[39m  )\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 9 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[2mnode_modules/web-ui-components/lib/molecules/tile/index.js\u001b[2m:8117:29\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.handleInterpolation (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1754:9)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.<anonymous> (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1844:37)\u001b[2m\u001b[22m\n\u001b[2m          at Array.forEach (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat Styled.createStyles (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1843:20)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.css (\u001b[2mnode_modules/web-ui-components/lib/global/layout/index.js\u001b[2m:1878:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Styled.render (\u001b[2mnode_modules/create-emotion-styled/dist/index.cjs.js\u001b[2m:150:38)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat finishClassComponent (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:6839:31)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateClassComponent (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:6794:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:7742:16)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11413:12)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoop (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11445:24)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRoot (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11528:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWorkOnRoot (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12416:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12328:7)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performSyncWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12302:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat requestWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12171:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleWork (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11986:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleRootUpdate (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12585:3)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainerAtExpirationTime (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12613:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateContainer (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:12624:10)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.create (\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:13057:5)\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/app/appError.test.tsx\u001b[39m\u001b[0m\u001b[2m:6:30)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516215572,
          "start": 1564516215296
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/app/appError.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [],
            "duration": 17,
            "failureMessages": [
              "TypeError: Cannot read property 'bodyText' of undefined\n    at /Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/molecules/tile/index.js:8117:29\n    at Styled.handleInterpolation (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1754:9)\n    at Styled.<anonymous> (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1844:37)\n    at Array.forEach (<anonymous>)\n    at Styled.createStyles (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1843:20)\n    at Styled.css (/Users/r906305/Desktop/myPsd2/application/node_modules/web-ui-components/lib/global/layout/index.js:1878:31)\n    at Styled.render (/Users/r906305/Desktop/myPsd2/application/node_modules/create-emotion-styled/dist/index.cjs.js:150:38)\n    at finishClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6839:31)\n    at updateClassComponent (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6794:24)\n    at beginWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7742:16)\n    at performUnitOfWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11413:12)\n    at workLoop (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11445:24)\n    at renderRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11528:7)\n    at performWorkOnRoot (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12416:7)\n    at performWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12328:7)\n    at performSyncWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12302:3)\n    at requestWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12171:5)\n    at scheduleWork (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11986:5)\n    at scheduleRootUpdate (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12585:3)\n    at updateContainerAtExpirationTime (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12613:10)\n    at updateContainer (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:10)\n    at Object.create (/Users/r906305/Desktop/myPsd2/application/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13057:5)\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/app/appError.test.tsx:6:30)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "app error should create snapshot",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "app error should create snapshot"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mSession Reducer › can success on fetch bank id\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m\"cb\"\u001b[39m\n    Received: \u001b[31m\"CB\"\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 34 | \u001b[39m  it(\u001b[32m'can success on fetch bank id'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 35 | \u001b[39m    \u001b[36mconst\u001b[39m newState \u001b[33m=\u001b[39m reducer(state\u001b[33m,\u001b[39m { type\u001b[33m:\u001b[39m \u001b[33mFETCH_BANK_ID\u001b[39m\u001b[33m.\u001b[39m\u001b[33mSUCCESS\u001b[39m\u001b[33m,\u001b[39m payload\u001b[33m:\u001b[39m { bank_id\u001b[33m:\u001b[39m \u001b[32m'CB'\u001b[39m}})\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 36 | \u001b[39m    expect(newState\u001b[33m.\u001b[39mbankId)\u001b[33m.\u001b[39mtoBe(\u001b[32m'cb'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                            \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 37 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 38 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 39 | \u001b[39m  it(\u001b[32m'can success on log out'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/state/session/reducer.test.ts\u001b[39m\u001b[0m\u001b[2m:36:29)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 7,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516215801,
          "start": 1564516215578
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/session/reducer.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Session Reducer should render the initial state",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should render the initial state"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Session Reducer can error on get access token",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on get access token"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Session Reducer can success on get access token",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on get access token"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Session Reducer can error on fetch bank id",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on fetch bank id"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 2,
            "failureMessages": [
              "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m\"cb\"\u001b[39m\nReceived: \u001b[31m\"CB\"\u001b[39m\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/state/session/reducer.test.ts:36:29)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "Session Reducer can success on fetch bank id",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can success on fetch bank id"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Session Reducer can success on log out",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on log out"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Session Reducer can set error object",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can set error object"
          },
          {
            "ancestorTitles": [
              "Session Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Session Reducer can set session",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can set session"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mAPI Utility methods › can get client Header properly\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoHaveProperty\u001b[2m(\u001b[22m\u001b[32mpath\u001b[39m\u001b[2m)\u001b[22m\n\n    Expected path: \u001b[32m\"ClientId\"\u001b[39m\n    Received path: \u001b[31m[]\u001b[39m\n\n    Received value: \u001b[31m{}\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 13 | \u001b[39m  it(\u001b[32m'can get client Header properly'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 14 | \u001b[39m    \u001b[36mconst\u001b[39m res \u001b[33m=\u001b[39m getClientIdHeader(appConfig\u001b[33m,\u001b[39m\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 15 | \u001b[39m    expect(res)\u001b[33m.\u001b[39mtoHaveProperty(\u001b[32m'ClientId'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 16 | \u001b[39m    expect(res\u001b[33m.\u001b[39m\u001b[33mClientId\u001b[39m)\u001b[33m.\u001b[39mtoBe(appConfig\u001b[33m.\u001b[39mclientId)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 17 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 18 | \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/utils/apiUtils.test.ts\u001b[39m\u001b[0m\u001b[2m:15:17)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 4,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516216025,
          "start": 1564516215806
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/utils/apiUtils.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "API Utility methods"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "API Utility methods can get the header details properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can get the header details properly"
          },
          {
            "ancestorTitles": [
              "API Utility methods"
            ],
            "duration": 1,
            "failureMessages": [
              "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoHaveProperty\u001b[2m(\u001b[22m\u001b[32mpath\u001b[39m\u001b[2m)\u001b[22m\n\nExpected path: \u001b[32m\"ClientId\"\u001b[39m\nReceived path: \u001b[31m[]\u001b[39m\n\nReceived value: \u001b[31m{}\u001b[39m\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/utils/apiUtils.test.ts:15:17)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "API Utility methods can get client Header properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can get client Header properly"
          },
          {
            "ancestorTitles": [
              "API Utility methods"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "API Utility methods can create session request properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can create session request properly"
          },
          {
            "ancestorTitles": [
              "API Utility methods"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "API Utility methods can resolve URL with string endpoint",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can resolve URL with string endpoint"
          },
          {
            "ancestorTitles": [
              "API Utility methods"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "API Utility methods can resolve URL with object endpoint",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can resolve URL with object endpoint"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1maccounts builder > get consent by Id response › can parse the response properly\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m\"d0d8e3cc-a956-419d-aa73-c908a5876ac7\"\u001b[39m\n    Received: \u001b[31m\"15cd022a-c37d-4a91-9a1d-8a981e3bb9fa\"\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 | \u001b[39m    \u001b[36mconst\u001b[39m consentPayload \u001b[33m=\u001b[39m getConsent()\u001b[33m.\u001b[39mpayload\u001b[33m.\u001b[39m\u001b[33mConsent\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 | \u001b[39m    \u001b[36mconst\u001b[39m res \u001b[33m=\u001b[39m parseGetConsentByIdResponse(consentPayload)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[2m\u001b[39m\u001b[90m 33 | \u001b[39m    expect(res\u001b[33m.\u001b[39mconsentId)\u001b[33m.\u001b[39mtoBe(\u001b[32m'd0d8e3cc-a956-419d-aa73-c908a5876ac7'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    | \u001b[39m                          \u001b[31m\u001b[1m^\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 34 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 35 | \u001b[39m})\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/test/state/accounts/builder.test.ts\u001b[39m\u001b[0m\u001b[2m:33:27)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 3,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516216245,
          "start": 1564516216031
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/accounts/builder.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "accounts builder > account list response"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "accounts builder > account list response can parse accountList response",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can parse accountList response"
          },
          {
            "ancestorTitles": [
              "accounts builder > account list response"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "accounts builder > account list response can select account based on id",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can select account based on id"
          },
          {
            "ancestorTitles": [
              "accounts builder > account list response"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "accounts builder > account list response can filter accounts based on filter",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can filter accounts based on filter"
          },
          {
            "ancestorTitles": [
              "accounts builder > get consent by Id response"
            ],
            "duration": 1,
            "failureMessages": [
              "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m\"d0d8e3cc-a956-419d-aa73-c908a5876ac7\"\u001b[39m\nReceived: \u001b[31m\"15cd022a-c37d-4a91-9a1d-8a981e3bb9fa\"\u001b[39m\n    at Object.<anonymous> (/Users/r906305/Desktop/myPsd2/application/src/test/state/accounts/builder.test.ts:33:27)\n    at Object.asyncJestTest (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/Users/r906305/Desktop/myPsd2/application/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>"
            ],
            "fullName": "accounts builder > get consent by Id response can parse the response properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "can parse the response properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 8,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516216644,
          "start": 1564516216251
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/app/bootstrap.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "bootApp > properties "
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "bootApp > properties  can fetch element Id properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can fetch element Id properly"
          },
          {
            "ancestorTitles": [
              "bootApp > properties "
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "bootApp > properties  can fetch config properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can fetch config properly"
          },
          {
            "ancestorTitles": [
              "bootApp > render Methods"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "bootApp > render Methods can initiate loader properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can initiate loader properly"
          },
          {
            "ancestorTitles": [
              "bootApp > render Methods"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "bootApp > render Methods can render error properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can render error properly"
          },
          {
            "ancestorTitles": [
              "bootApp > render Methods"
            ],
            "duration": 29,
            "failureMessages": [],
            "fullName": "bootApp > render Methods can start the app properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can start the app properly"
          },
          {
            "ancestorTitles": [
              "bootApp > render Methods"
            ],
            "duration": 5,
            "failureMessages": [],
            "fullName": "bootApp > render Methods can start the app properly for prod env",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can start the app properly for prod env"
          },
          {
            "ancestorTitles": [
              "bootApp > render Methods"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "bootApp > render Methods will render error from start app in case of no segment",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "will render error from start app in case of no segment"
          },
          {
            "ancestorTitles": [
              "bootApp > clearSession and render"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "bootApp > clearSession and render can clear the session and render error",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can clear the session and render error"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516216988,
          "start": 1564516216650
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/routeFactory/routeResolver.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Route Resolver > Account Instances"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Route Resolver > Account Instances can get the account instances having consent with proper status",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can get the account instances having consent with proper status"
          },
          {
            "ancestorTitles": [
              "Route Resolver > Account Instances"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Route Resolver > Account Instances returns null having consent with improper status",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "returns null having consent with improper status"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 8,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516217238,
          "start": 1564516216994
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/app/initApp.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "initApp > fetchBrand tests ... "
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "initApp > fetchBrand tests ...  fetches the brand correctly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "fetches the brand correctly"
          },
          {
            "ancestorTitles": [
              "initApp > fetchBrand tests ... "
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "initApp > fetchBrand tests ...  fetches the default brand in case of no match",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "fetches the default brand in case of no match"
          },
          {
            "ancestorTitles": [
              "initApp > fetchBrand tests ... "
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "initApp > fetchBrand tests ...  fetches the default brand in case of localhost",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "fetches the default brand in case of localhost"
          },
          {
            "ancestorTitles": [
              "initApp > fetchBrand tests ... "
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "initApp > fetchBrand tests ...  fetches the default brand in case of localhost with Bank",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "fetches the default brand in case of localhost with Bank"
          },
          {
            "ancestorTitles": [
              "initApp > fetchConfig tests ..."
            ],
            "duration": 3,
            "failureMessages": [],
            "fullName": "initApp > fetchConfig tests ... can fetch the config correctly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can fetch the config correctly"
          },
          {
            "ancestorTitles": [
              "initApp > fetchConfig tests ..."
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "initApp > fetchConfig tests ... returns the error in faulty case",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "returns the error in faulty case"
          },
          {
            "ancestorTitles": [
              "initApp > createAppConfig tests ...."
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "initApp > createAppConfig tests .... creates the app config correctly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "creates the app config correctly"
          },
          {
            "ancestorTitles": [
              "initApp > createAppConfig tests ...."
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "initApp > createAppConfig tests .... returns the error in faulty case",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "returns the error in faulty case"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516217556,
          "start": 1564516217320
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 2,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/routeFactory/index.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "RouteFactory > index"
            ],
            "duration": 3,
            "failureMessages": [],
            "fullName": "RouteFactory > index can do routing with Segment",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can do routing with Segment"
          },
          {
            "ancestorTitles": [
              "RouteFactory > index"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "RouteFactory > index can render error without Segment",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can render error without Segment"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 5,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516217782,
          "start": 1564516217565
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/payments/getDetails/reducer.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Payments Reducer"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Payments Reducer should render the initial state",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should render the initial state"
          },
          {
            "ancestorTitles": [
              "Payments Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Payments Reducer can success on fetch payment details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on fetch payment details"
          },
          {
            "ancestorTitles": [
              "Payments Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Payments Reducer can error on no payment details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on no payment details"
          },
          {
            "ancestorTitles": [
              "Payments Reducer"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Payments Reducer can success on fetch account details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on fetch account details"
          },
          {
            "ancestorTitles": [
              "Payments Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Payments Reducer can error on no account details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on no account details"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516218007,
          "start": 1564516217788
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/utils/apiCaller.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "API Utils"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "API Utils can create desired request types",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can create desired request types"
          },
          {
            "ancestorTitles": [
              "API Utils"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "API Utils can get the headers",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can get the headers"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 7,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516218228,
          "start": 1564516218013
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/ui/reducer.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "UI Reducer should render the initial state",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should render the initial state"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Reducer GET_CONTENT",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "GET_CONTENT"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "UI Reducer RESET_UI",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "RESET_UI"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Reducer SET_ALERT",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "SET_ALERT"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Reducer TOGGLE_LOADER",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "TOGGLE_LOADER"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "UI Reducer TOGGLE_MODAL",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "TOGGLE_MODAL"
          },
          {
            "ancestorTitles": [
              "UI Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Reducer TRACK_SERVICE_CALL",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "TRACK_SERVICE_CALL"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 4,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516218448,
          "start": 1564516218233
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/accounts/getConsent/reducer.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Accounts Reducer should render the initial state",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should render the initial state"
          },
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Accounts Reducer can success on get consent",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on get consent"
          },
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Accounts Reducer can error on no consent",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on no consent"
          },
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Accounts Reducer can error on get consent",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on get consent"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516218660,
          "start": 1564516218453
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/payments/builder.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "payments builder > payment details response"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "payments builder > payment details response can parse payment details response",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can parse payment details response"
          },
          {
            "ancestorTitles": [
              "payments builder > payment details response"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "payments builder > payment details response can can create beneficiary request",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can can create beneficiary request"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 5,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516218877,
          "start": 1564516218665
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/ui/index.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "UI Actions"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "UI Actions should dispatch RESET_UI when resetUI is called",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should dispatch RESET_UI when resetUI is called"
          },
          {
            "ancestorTitles": [
              "UI Actions"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "UI Actions should dispatch SET_ALERT when toggleAlert is called",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should dispatch SET_ALERT when toggleAlert is called"
          },
          {
            "ancestorTitles": [
              "UI Actions"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Actions should dispatch TOGGLE_LOADER when toggleLoader is called",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should dispatch TOGGLE_LOADER when toggleLoader is called"
          },
          {
            "ancestorTitles": [
              "UI Actions"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "UI Actions should dispatch TOGGLE_MODAL when toggleModal is called",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should dispatch TOGGLE_MODAL when toggleModal is called"
          },
          {
            "ancestorTitles": [
              "UI Actions"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "UI Actions should dispatch TRACK_SERVICE_CALL when trackServiceCall is called",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should dispatch TRACK_SERVICE_CALL when trackServiceCall is called"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 3,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516219098,
          "start": 1564516218883
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/payments/getPaymentDetails/reducer.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Accounts Reducer should render the initial state",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "should render the initial state"
          },
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Accounts Reducer can success on fetch payment details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can success on fetch payment details"
          },
          {
            "ancestorTitles": [
              "Accounts Reducer"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Accounts Reducer can error on no payment details",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can error on no payment details"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516219322,
          "start": 1564516219104
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/session/index.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "SESSION Actions"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "SESSION Actions can dispatch Set Session",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can dispatch Set Session"
          },
          {
            "ancestorTitles": [
              "SESSION Actions"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "SESSION Actions can dispatch Set Error Object",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can dispatch Set Error Object"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 3,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516219536,
          "start": 1564516219327
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/utils/appUtils.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "App Utils"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "App Utils can redirect to desired location",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can redirect to desired location"
          },
          {
            "ancestorTitles": [
              "App Utils"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "App Utils can set isMobile to the AppUtils",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can set isMobile to the AppUtils"
          },
          {
            "ancestorTitles": [
              "App Utils"
            ],
            "duration": 0,
            "failureMessages": [],
            "fullName": "App Utils can redirect to mobile app in case of mobile redirection",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can redirect to mobile app in case of mobile redirection"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 1,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516219744,
          "start": 1564516219544
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/utils/stringUtils.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "String Utils: "
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "String Utils:  can resolve template strings",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can resolve template strings"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516219948,
          "start": 1564516219751
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 2,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/common/components/header.test.tsx",
        "testResults": [
          {
            "ancestorTitles": [
              "Web App Header"
            ],
            "duration": 6,
            "failureMessages": [],
            "fullName": "Web App Header renders",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders"
          },
          {
            "ancestorTitles": [
              "Web App Header"
            ],
            "duration": 3,
            "failureMessages": [],
            "fullName": "Web App Header renders navigation properly",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "renders navigation properly"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "perfStats": {
          "end": 1564516220123,
          "start": 1564516219953
        },
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "unmatched": 0,
          "updated": 0,
          "uncheckedKeys": []
        },
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/state/session/builder.test.ts",
        "testResults": [
          {
            "ancestorTitles": [
              "Session Builder"
            ],
            "duration": 2,
            "failureMessages": [],
            "fullName": "Session Builder can create log out request",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can create log out request"
          },
          {
            "ancestorTitles": [
              "Session Builder"
            ],
            "duration": 1,
            "failureMessages": [],
            "fullName": "Session Builder can create request for get access token",
            "location": null,
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "can create request for get access token"
          }
        ],
        "skipped": false,
        "leaks": false
      },
      {
        "displayName": "",
        "failureMessage": "  \u001b[1m● \u001b[22mTest suite failed to run\n\n    TypeError: utils_1.createRequestTypes is not a function\n\n    \u001b[0m \u001b[90m  5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mFETCH_ACCOUNT_DETAILS_ENDPOINT\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'{api_url}/banks/{bank_id}/accounts/{scope_id}'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m  6 | \u001b[39m\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mFETCH_CONSENT_LIST\u001b[39m \u001b[33m=\u001b[39m createRequestTypes(\u001b[32m'FETCH_CONSENT_LIST'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    | \u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m  8 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m fetchConsentList \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n    \u001b[0m \u001b[90m  9 | \u001b[39m  \u001b[36mreturn\u001b[39m createApiAction({\u001b[0m\n    \u001b[0m \u001b[90m 10 | \u001b[39m    endpoint\u001b[33m:\u001b[39m \u001b[33mFETCH_CONSENT_LIST_ENDPOINT\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/state/manageConsent/index.ts\u001b[2m:7:35)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/state/manageConsent/reducer.ts\u001b[2m:4:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/state/store/reducers.ts\u001b[2m:7:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/state/store/configureStore.ts\u001b[2m:7:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/app/app.tsx\u001b[2m:4:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[0m\u001b[36msrc/test/app/app.test.tsx\u001b[39m\u001b[0m\u001b[2m:3:1)\u001b[22m\n",
        "leaks": false,
        "numFailingTests": 0,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "openHandles": [],
        "perfStats": {
          "end": 0,
          "start": 0
        },
        "skipped": false,
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "uncheckedKeys": [],
          "unmatched": 0,
          "updated": 0
        },
        "testExecError": {},
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/app/app.test.tsx",
        "testResults": []
      },
      {
        "displayName": "",
        "failureMessage": "  \u001b[1m● \u001b[22mTest suite failed to run\n\n    TypeError: utils_1.createRequestTypes is not a function\n\n    \u001b[0m \u001b[90m  5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mFETCH_ACCOUNT_DETAILS_ENDPOINT\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'{api_url}/banks/{bank_id}/accounts/{scope_id}'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m  6 | \u001b[39m\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mFETCH_CONSENT_LIST\u001b[39m \u001b[33m=\u001b[39m createRequestTypes(\u001b[32m'FETCH_CONSENT_LIST'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    | \u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m  8 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m fetchConsentList \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n    \u001b[0m \u001b[90m  9 | \u001b[39m  \u001b[36mreturn\u001b[39m createApiAction({\u001b[0m\n    \u001b[0m \u001b[90m 10 | \u001b[39m    endpoint\u001b[33m:\u001b[39m \u001b[33mFETCH_CONSENT_LIST_ENDPOINT\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/state/manageConsent/index.ts\u001b[2m:7:35)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/segment/manageConsents/containers/manageConsentContainer.tsx\u001b[2m:8:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/segment/index.ts\u001b[2m:3:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/routeFactory/routeSelector.tsx\u001b[2m:6:1)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[0m\u001b[36msrc/test/routeFactory/routeSelector.test.tsx\u001b[39m\u001b[0m\u001b[2m:3:1)\u001b[22m\n",
        "leaks": false,
        "numFailingTests": 0,
        "numPassingTests": 0,
        "numPendingTests": 0,
        "numTodoTests": 0,
        "openHandles": [],
        "perfStats": {
          "end": 0,
          "start": 0
        },
        "skipped": false,
        "snapshot": {
          "added": 0,
          "fileDeleted": false,
          "matched": 0,
          "unchecked": 0,
          "uncheckedKeys": [],
          "unmatched": 0,
          "updated": 0
        },
        "testExecError": {},
        "testFilePath": "/Users/r906305/Desktop/myPsd2/application/src/test/routeFactory/routeSelector.test.tsx",
        "testResults": []
      }
    ],
    "wasInterrupted": false
  }

  export default testResults;