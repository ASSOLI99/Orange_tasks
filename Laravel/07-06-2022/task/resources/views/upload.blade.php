<h1>Upload File here</h1>
<form action="upload" method="POST" enctype="multipart/form-data">
@csrf
    <input type="file" name="file"><br><br>
<button type="submit">upload</button>
</form>