// Taken from https://github.com/MichelML/rdkit-js/blob/docs/add-original-demo-example/examples/react-example/src/utils/initRDKit.js
const initRDKit = (() => {
    let rdkitLoadingPromise;
  
    return () => {
      if (!rdkitLoadingPromise) {
        rdkitLoadingPromise = new Promise((resolve, reject) => {
          window
            .initRDKitModule()
            .then((RDKit) => {
              window.RDKit = RDKit;
              resolve();
            })
            .catch((e) => {
              reject();
            });
        });
      }
  
      return rdkitLoadingPromise;
    };
  })();
  
  export default initRDKit;