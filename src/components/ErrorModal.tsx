import Swal from "sweetalert2";

export const ErrorModal = (message: string, err: Boolean, success: Boolean) => {
  Swal.fire({
    title: success ? "Success" : "Failed",
    icon: err ? "error" : "success",
    text: message,
    confirmButtonColor: err ? "#f52d16d9" : "#26bf6cd9",
  });
};