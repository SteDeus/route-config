Promise.all([System.import('single-spa'), System.import('single-spa-layout')]).then(([singleSpa, singleSpaLayout]) => {
    const { constructApplications, constructLayoutEngine, constructRoutes } = singleSpaLayout;
    const { registerApplication, start } = singleSpa;

    const routes = constructRoutes(document.querySelector('#single-spa-layout'));
    const applications = constructApplications({
      routes,
      loadApp({ name }) {
        return System.import(name);
      },
    });
    const layoutEngine = constructLayoutEngine({ routes, applications });
    applications.forEach(registerApplication);

    start();
});