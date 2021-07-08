const emailsValidos = [
  "validamisto@validatuga.pt",
  "vt@vt.pt",
  "valIIIdamisto@vOt.com",
  "v121t@validatuga.pt",
  "validamisto@vt123.com",
  "v_t@validatuga.pt.com",
];

const emailsInvalidos = [
  "valiDamIsto@valida uga.pt",
  "vtº@vt.pt",
  "val idamisto@vt.com",
  "@vtvalidatuga.pt",
  "validamisto@validatuga.pt.pt_",
];

module.exports = {
  emailsInvalidos,
  emailsValidos,
};
