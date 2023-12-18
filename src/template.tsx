export type template__Data = {
  "name": string,
  "content": template_content[]
  "in": number[]
  "lever": number
  "out": number[]
  "destination": number
}

type template_content = {
  "stopType": number,
  "time": number,
  "track": number,
  "number": number
}