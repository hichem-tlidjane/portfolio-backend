export function authorize(role) {
    if (req.user.role !== role){
            return next(new AppError("forbidden", 403));
    }
    next();
}
