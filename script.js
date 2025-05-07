document.addEventListener('DOMContentLoaded', function() {
    // Xử lý trang đăng nhập
    if (document.querySelector('.login-page')) {
        const passcodeInput = document.getElementById('passcode');
        const submitBtn = document.getElementById('submitBtn');

        function checkPassword() {
            if (passcodeInput.value === "161106") {
                window.location.href = "message.html";
            } else {
                alert("Mật mã không đúng! Vui lòng thử lại.");
                passcodeInput.value = "";
            }
        }

        // Xử lý khi click nút xác nhận
        submitBtn.addEventListener('click', checkPassword);

        // Xử lý khi nhấn Enter
        passcodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    
});
