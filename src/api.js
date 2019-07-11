import { create } from 'apisauce'

const api = create({
    baseURL: 'http://api.plantaoextra.com/v1',
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjI4NTkyNTMsIm5iZiI6MTU2Mjg1OTI1MywianRpIjoiMjkzOWZjNGYtYWI1Yy00NzkyLWExMGEtYTBhNmJhNTM1ZTQ3IiwiZXhwIjoxNTYyODYyODUzLCJpZGVudGl0eSI6eyJ1c2VyX2lkIjo0LCJuYW1lIjoiUmFmYWVsIEFMbWVpZGEgb2ZpY2lhbCIsImNvbXBhbnlfaWQiOjEsImdyb3VwX2lkIjozLCJ1c2VyX2xvZ2dlZF9pZCI6MzIzfSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.9Fk7Q9LIymXaN17OCFsHMZDgEV4BG6cn9tavDViIgnw'
    },
    timeout: 30000
})

export default api