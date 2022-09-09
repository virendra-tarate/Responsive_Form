function show()
            {
                var x = document.getElementById('password');
                var y = document.getElementById('open');
                var z = document.getElementById('close');
                
                if(x.type === 'password')
                    {
                        x.type = 'text';
                        y.style.display = 'block';
                        z.style.display = 'none';
                    }
                else
                    {
                        x.type = 'password';
                        y.style.display = 'none';
                        z.style.display = 'block';
                    }
            }

