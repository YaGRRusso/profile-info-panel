import { z } from 'zod'

const errorMap: z.ZodErrorMap = (issue) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      return { message: 'required' }
    case z.ZodIssueCode.too_small:
      return { message: 'tooSmall' }
    case z.ZodIssueCode.too_big:
      return { message: 'tooBig' }
    default:
      return { message: 'invalid' }
  }
}

export default errorMap
