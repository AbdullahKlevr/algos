 <section class="contact-form-footer py-100">
                <div class="container-1750">
                    <div class="main-parent-design">
                        <div class="bg-image-curve">
                            <div class="text-get-started">
                                <h6>Let’s Get Started</h6>
                                <p>If you’re ready, then why wait? You’re just a click away from getting your business started. Please fill out the form, and our support team will get back to you with fruitful e-commerce solutions. 
</p>
                            </div>
                        </div>
                        <div class="form-on-top container-1560">
                            <form  action="/leads/" method="POST">
                            <input type="hidden" name="url" value='amazon-publishing.html'>
           <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">
<input type="hidden" name="brand" value="ALGOSECOM">
<input type="hidden" name="token" value="<?= $token; ?>">
<input type="hidden" name="tag" value="top-form">
<input type="hidden" name="price" value="null">
<input type="hidden" name="news" value="1">
           <input type="hidden" name="subject" value="Banner Form (Algosecom.com)">
                                <div class="form-inputs">
                                    <input type="hidden" name="page-name" class="pagename" value="home">
                                    <input type="text" name="name" placeholder="Your Name" required>
                                </div>
                                <div class="form-inputs">
                                    <input type="email" name="email" placeholder="Your Email" required>
                                </div>
                                <div class="form-inputs">
                                    <input type="number" name="phone" placeholder="Your Phone" required>
                                </div>
                                <div class="form-inputs mb-0">
                                    <textarea type="text" name="brief" placeholder="Your Message"></textarea>
                                </div>
                                <div class="form-checkbox position-relative">
                                    <input type="checkbox" id="checkboxpp" class="pabs-checkbox" required>
                                    <label for="checkboxpp" class="designedbox"></label>
                                    <label for="checkboxpp">I have read and accept the policy &amp; privacy</label>
                                </div>
                                <p class="form-disclosure">
                                    *By providing a telephone number and submitting this form, you consent to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.*
                                </p>
                                <div class="form-input-btn">
                                    <button type="submit" class="btn-reg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>