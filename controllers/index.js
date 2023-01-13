
async function getPersonal(req, res) {
    try {
        req.getConnection((error, conn) => {
            //*COMANDOS SQL:

            //! TODAS LAS PERSONAS:
            conn.query('SELECT * FROM management', (error, rows) => {

                // console.log(rows);
                res.render('main.ejs', { rows });

            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function newPersonal(req, res) {
    try {
        res.render('newPersonal');
        
    } catch (error) {
        console.log(error);
    }
}

async function addPersonal(req, res) {
    try {
        req.getConnection((error, conn) => {
            conn.query('INSERT INTO management set ?', [req.body], (error, rows) => {
                res.redirect('/');
            });
        })
    } catch (error) {
        console.log(error);
    }
}

async function deletePersonal(req, res) {
    try {
        req.getConnection((error, conn) => {
            conn.query('DELETE FROM management WHERE id = ?', [req.params.id], (error, rows) => {
                res.redirect('/');
            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function getParticular(req, res) {
    try {
        req.getConnection((error, conn) => {
            conn.query('SELECT * FROM management WHERE id = ?', [req.params.id], (error, rows) => {
                res.render('editPersonal', { rows });
            });
        });
    } catch (error) {
        console.log(error);
    }

}

async function updatePersonal(req, res) {
    try {
        req.getConnection((error, conn) => {
            conn.query('UPDATE management set ? WHERE id = ?', [req.body, req.params.id], (error, rows) => {
                res.redirect('/');
            });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getPersonal, newPersonal,addPersonal, deletePersonal, getParticular, updatePersonal }