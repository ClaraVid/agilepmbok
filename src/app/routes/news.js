const dbConnection = require("../../config/dbConnection");

module.exports = app => {
  const connection = dbConnection();
  let procesos_pmbok, salidas_proc, rel_sal_proc, rel_prac_proc, rel_sal_prac;

  app.get("/procesos", (req, res) => {
    connection.query("SELECT * FROM procesos_pmbok", (err, result) => {
      procesos_pmbok = result;
    });

    connection.query("SELECT * FROM salida_procesos", (err, result) => {
      salidas_proc = result;
    });

    connection.query("SELECT * FROM rel_proc_salida", (err, result) => {
      rel_sal_proc = result;
    });

    connection.query("SELECT * FROM rel_proc_prac", (err, result) => {
      rel_prac_proc = result;
    });

    connection.query("SELECT * FROM rel_sal_prac", (err, result) => {
      rel_sal_prac = result;
    });

    connection.query("SELECT * FROM practicas_agiles", (err, result) => {
      //console.log(result);
      res.render("news/news", {
        practicas: result,
        procesos_pmbok: procesos_pmbok,
        salidas_proc: salidas_proc,
        rel_sal_proc: rel_sal_proc,
        rel_prac_proc: rel_prac_proc,
        rel_sal_prac: rel_sal_prac
      });
    });
  });
};
