// when this function is called, a text box should appear so that a user
// can create a post.

function showPostForm() {

	$("#postTitle").show();
	$("#textBox").show();
	$("#submitButton").show();
	$("#hidePosts").show();

}

function hidePostForm() {

	$("#postTitle").hide();
	$("#textBox").hide();
	$("#submitButton").hide();
	$("#hidePosts").hide();

}
