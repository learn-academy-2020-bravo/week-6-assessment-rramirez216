# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)  BlogPostsController inherits from the ApplicationController and is responsible for making sense of the requests, and producing the appropriate output
class BlogPostsController < ApplicationController
  def index
    # 2) an instace variable containing all of the blog posts created
    @posts = BlogPost.all
  end

  def show
    # 3) it is a show method that will display a specific blog post
    @post = BlogPost.find(params[:id])
  end

  # 4) a new method that will create a new blog post
  def new
  end

  def create
    # 5) this is a create method using params to get attributes to create a new blog post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6) it redirects to the blog post page if it fails to delete
      redirect_to blog_post_path(@post)
    end
  end

  # 7)
  private
  def blog_post_params
    # 8) whenever a blog post is created its attributes must have a value
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) this is where we can tell rails that there is a connection between two models; an association.
class BlogPost < ApplicationRecord
  # 10) this is the association that indicates a one to many link to the comments model, 
  # so in short a blog post has many comments
  has_many :comments
end
