import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
        <img  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, in.
        <div className="singlePostEdit"><i className="singlePostIcon fa-solid fa-pen-to-square"></i>
       {/* yha pr dleete aur edit ka button hai */}
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Lorem, ipsum.</b></span>
            <span className="singlePostDate">1hr ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae magni fuga blanditiis vitae veniam asperiores quas fugiat, sapiente veritatis placeat cupiditate doloribus rem dolore soluta ullam, dignissimos maxime aperiam possimus ab saepe consequatur ipsum. At modi sunt quia eius atque cum omnis voluptatibus labore! Autem adipisci ut magnam impedit! Pariatur earum est laboriosam architecto mollitia distinctio dolor libero quo a? Numquam laborum blanditiis accusamus consequatur consectetur enim odit unde dicta, dignissimos odio libero quia aut! Accusantium repudiandae quae dolore deserunt iure consequatur sint! Ipsum tempore, fugit corporis eius amet nisi, laboriosam quia iusto qui omnis culpa tenetur ad aspernatur. Ducimus praesentium perferendis porro atque quasi, aut tenetur molestias laudantium architecto reiciendis doloremque ipsa velit molestiae. Ab doloribus ratione recusandae laudantium voluptatum corporis, qui quia reprehenderit veniam nostrum repellendus quo quisquam mollitia asperiores iure? Amet ipsam sit molestias nihil repudiandae culpa soluta similique, explicabo recusandae, dolor dolorum nulla deserunt, cupiditate incidunt libero voluptates tempora inventore error harum magni temporibus blanditiis eius officia quidem. Eum odio, fugit nam provident nemo deleniti, repellat commodi reiciendis consectetur quaerat dolore rem maiores voluptate ducimus ad debitis deserunt vitae ex nisi. Sapiente ullam rem dolorem, ad voluptatem molestiae maxime excepturi illo vitae corporis, mollitia blanditiis!</p>
    </div>
       
    </div>
  )
}
