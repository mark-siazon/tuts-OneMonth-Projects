function saveChanges() { 
    localStorage.setItem("listItems", $("#list-items").html());
}

function addTodoItem(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var item = $("#todo-list-item").val(); // Get the value of the input field with id "todo-list-item"

    if (item) { // If the item is not empty or null

        // Append a new list item with a checkbox, item value, remove link, and hr to the element with id "list-items"
        $("#list-items").append("<li><div><input class='checkbox' type='checkbox'/><span>" + item + "</span><i class='fa-solid fa-x remove' alt='remove-btn'></i></div><hr></li>");
        saveChanges();
        $("#todo-list-item").val(""); // Clear the input field value
    }
}

function removeTodoItem() {
    var parentElement = $(this).parent().parent(); // Get the parent element
    
    parentElement.fadeOut(300, function () {
        $(this).remove();
        saveChanges();
    }); // Set a delay of 300 ms (0.3 seconds) before removing the element
}

function toggleCompleted() {
    if ($(this).attr("checked")) {
        $(this).removeAttr("checked");
    } else {
    $(this).attr("checked", "checked");
    }

    $(this).next().toggleClass("completed");
    saveChanges();
} // Toggle the "completed" class on the next sibling element


// MAIN FUNCTION
$(document).ready(function () { // This function will be executed when the document (DOM) is ready
    $(".add-items").submit(addTodoItem);

    $(document).on("click", ".remove", removeTodoItem);

    // Event delegation for dynamically added checkboxes
    $(document).on("change", ".checkbox", toggleCompleted);

    $("#list-items").html(localStorage.getItem("listItems"));
});