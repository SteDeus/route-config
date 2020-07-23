import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@enel-starbeat/sidenav",
  app: () => System.import("sidenav"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@enel-starbeat/form-sample",
  app: () => System.import("form-sample"),
  activeWhen: ["/form-sample"]
});

registerApplication({
  name: "@enel-starbeat/adapter",
  app: () => System.import("adapter"),
  activeWhen: ["/adapter"]
});



// registerApplication({
//   name: "@enel-starbeat/navbar",
//   app: () => System.import("@enel-starbeat/navbar"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });



start();
