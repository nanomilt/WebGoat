let webgoat = {}; // Add this line to declare the global variable

webgoat.customjs = {
    profileUpload: function() {
        let picture = document.getElementById("uploadedFile").files[0];
        let formData = new FormData();
        formData.append("uploadedFile", picture);
        formData.append("fullName", $("#fullName").val());
        formData.append("email", $("#email").val());
        formData.append("password", $("#password").val());
        return formData;
    },

    profileUploadCallback: function() {
        $.get("PathTraversal/profile-picture", function(result) {
            document.getElementById("preview").src = "data:image/png;base64," + result;
        });
    },

    profileUploadFix: function() {
        let picture = document.getElementById("uploadedFileFix").files[0];
        let formData = new FormData();
        formData.append("uploadedFileFix", picture);
        formData.append("fullNameFix", $("#fullNameFix").val());
        formData.append("emailFix", $("#emailFix").val());
        formData.append("passwordFix", $("#passwordFix").val());
        return formData;
    },

    profileUploadCallbackFix: function() {
        $.get("PathTraversal/profile-picture", function(result) {
            document.getElementById("previewFix").src = "data:image/png;base64," + result;
        });
    },

    profileUploadRemoveUserInput: function() {
        let picture = document.getElementById("uploadedFileRemoveUserInput").files[0];
        let formData = new FormData();
        formData.append("uploadedFileRemoveUserInput", picture);
        formData.append("fullName", $("#fullNameRemoveUserInput").val());
        formData.append("email", $("#emailRemoveUserInput").val());
        formData.append("password", $("#passwordRemoveUserInput").val());
        return formData;
    },

    profileUploadCallbackRemoveUserInput: function() {
        $.get("PathTraversal/profile-picture", function(result) {
            document.getElementById("previewRemoveUserInput").src = "data:image/png;base64," + result;
        });
    },

    profileUploadCallbackRetrieval: function() {
        $.get("PathTraversal/profile-picture", function(result) {
            document.getElementById("previewRetrieval").src = "data:image/png;base64," + result;
        });
    },

    profileZipSlip: function() {
        let picture = document.getElementById("uploadedFileZipSlip").files[0];
        let formData = new FormData();
        formData.append("uploadedFileZipSlip", picture);
        formData.append("fullName", $("#fullNameZipSlip").val());
        formData.append("email", $("#emailZipSlip").val());
        formData.append("password", $("#passwordZipSlip").val());
        return formData;
    }
};

function newRandomPicture() {
    $.get("PathTraversal/random-picture", function(result) {
        document.getElementById("randomCatPicture").src = "data:image/png;base64," + result;
    });
}