<h1>Admin FE</h1>

### Nguyên tắc của tuyến đường *File System based Routing*
- tất cả tuyến đường đều đặt trong folder pages
- index.vue đại diện cho tuyến đường khớp với thư mục hiện tại (vd: pages/post/inđex.vue tương đương /post) và tên thư mục phải trùng với tên tuyến đường
- [path].vue đại diện cho dynamic routing (vd: /papes/post/[id].vue tương đương /post/:id) và tên file phải trùng với tên path
- other:
  + pages/post/:postId/users tương đương /post/( [postId].vue và folder users/index.vue)