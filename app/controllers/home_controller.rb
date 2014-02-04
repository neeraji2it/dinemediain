class HomeController < ApplicationController
  def index
    
  end
  
  def services
    
  end
  
  def portfolio
    
  end
  
  def contact
    if request.post?
      @contact = Contact.new(contact_params)
#      @contact.attach = params[:contact][:attach]
      if @contact.save
        flash.now[:notice] = 'Your Message Successfully Sent.'
        redirect_to '/'
      else
        render :action => "contact"
      end
    else
      @contact = Contact.new
    end
  end
  
  private
  def contact_params
    params.require(:contact).permit!
  end
end
