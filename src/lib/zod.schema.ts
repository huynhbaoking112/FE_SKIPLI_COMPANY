import { z } from "zod";

export const phoneSchema = z.object({
  phoneNumber: z.string().min(1, 'Số điện thoại không được để trống')
    .regex(/^0[3,5,7,8,9]\d{8}$/, 'Số điện thoại không hợp lệ (định dạng: 0xxxxxxxxx)')
})

export const emailSchema = z.object({
  email: z.string().min(1, 'Email không được để trống')
    .email('Email không hợp lệ')
})

export const otpSchema = z.object({
  accessCode: z.string().min(6, 'Mã xác thực phải có 6 số')
    .max(6, 'Mã xác thực phải có 6 số')
    .regex(/^\d{6}$/, 'Mã xác thực chỉ chứa số')
})
export const taskFormSchema = z.object({
  title: z.string().min(1, 'Tiêu đề là bắt buộc').max(200, 'Tiêu đề không được quá 200 ký tự'),
  description: z.string().max(1000, 'Mô tả không được quá 1000 ký tự').optional(),
  employeeId: z.string().min(1, 'Vui lòng chọn nhân viên'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  dueDate: z.date().optional(),
});


export const profileFormSchema = z.object({
  name: z.string().min(1, "Tên không được để trống").max(100, "Tên không được quá 100 ký tự"),
  phoneNumber: z.string().optional(),
  position: z.string().optional(),
});
