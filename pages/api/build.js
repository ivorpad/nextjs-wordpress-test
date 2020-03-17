var shell = require("shelljs");

export default (req, res) => {
  if (req.method === "POST") {
    shell.exec("yarn run build", (code, stdout, stderr) => {
      console.log(code, stdout, stderr)
    })
		res.end(JSON.stringify({ ok: true }));
  } else {
    res.status(404).end();
  }
};
