<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2010597 - Exercise 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src=index.js></script>


    <table id="mytable" class="table table-striped " style="width:80%; margin:auto">
        <thead>
            <tr style="text-align:center">
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Create At</th>

            </tr>
        </thead>
        <tbody id="data">
            <tr id="insert" style="text-align:center">
                <td><input type="email" id="new_email"></td>
                <td><input type="text" id="new_fname"></td>
                <td><input type="text" id="new_lname"></td>
                <td><input type="number" id="new_age"></td>
                <td><input type="text" id="new_CreateAt"></td>
                <td><input type="button" class="btn btn-outline-success" value="Insert Row" onclick="insert_row();"></td>
            </tr>
        </tbody>
    </table>

    <div style="text-align: center; margin-top: 5px;">
        <button onclick="showData()" id="show" class="btn btn-info">Show data</button>
    </div>

</body>

</html>