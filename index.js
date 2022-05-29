function telephoneCheck(str) {
    const validNumber = [
         // for: 555-555-5555
         /^\d{3}-\d{3}-\d{4}$/,

         // for: 555 555 5555
         /^\d{3} \d{3} \d{4}$/,
 
         // for: 1 555-555-5555
         /^1? ?\d{3}-\d{3}-\d{4}$/,
 
         //for:  1 (555) 555-5555, 1(555)555-5555
         /^1? ?\(\d{3}\) ?\d{3}-\d{4}$/,
 
         //for:  5555555555
         /^1? ?\d{3} ?\d{3} ?\d{4}$/
    ]
	return validNumber.some((pattern) => pattern.test(str))
}

// telephoneCheck('555-555-5555')
